import request from "axios"
import config from "../config";
import router from '../router'
import {Notification} from 'element-ui'

const token = localStorage.getItem("token")

const service = request.create({
    baseURL: config.API_URL,
    timeout: 5000,
    headers: {'Authorization': token}
});

service.interceptors.response.use(
    response => {
        const res = response.data;

        //403
        if (res.code === 403){
            setTimeout(()=>{
                router.push("/403")
            }, 700)
            return
        }

        if (res.success === true) {
            if (res.msg !== null) {
                Notification.success({
                    title: 'Success ',
                    message: res.msg,
                    type: 'success'
                });
            }

        } else {
            Notification.error({
                title: 'Error ' + res.code,
                message: res.msg
            });
        }
        return res
    },

    error => {
        console.log('err' + error);
        return Promise.reject(error)
    }
);

export default service
