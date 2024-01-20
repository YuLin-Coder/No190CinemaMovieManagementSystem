import service from "../utils/request";

export function Login(data) {
    return service({
        url: '/worker/login',
        method: 'post',
        data: data
    })
}

export function FindAllUser(){
    return service({
        url: "/user",
        method: "get"
    })
}

export function UpdateUser(data){
    return service({
        url: "/user",
        method: "put",
        data: data
    })
}
