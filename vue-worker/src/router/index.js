import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/components/layout/Layout"

Vue.use(VueRouter);

const routes = [

    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login")
    },

    //公共布局下的路由
    {
        path: '/',
        component: Layout,
        children: [

            {
                path: '/leaving',
                component: () => import("@/views/Leaving")
            },
            {
                path: '/evaluate',
                component: () => import("@/views/Evaluate")
            },
            {
                path: '/activity',
                component: () => import("@/views/Activity")
            },
            {
                path: '/phone',
                component: () => import("@/views/Phone")
            },
            {
                path: '/setting',
                component: () => import("@/views/Setting")
            },
            {
                path: '/info',
                component: () => import("@/views/Info")
            },
            {
                path: '/403',
                component: () => import("@/views/error/403")
            },

            {
                path: '/404',
                component: () => import("@/views/error/404")
            },
        ]
    },

    {
        path: "*",
        redirect: '/404'
    }


];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

//路由卫士
router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem("token") !== null
    if (to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
    else next()
})

export default router
