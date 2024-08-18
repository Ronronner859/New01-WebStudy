import {createRouter, createWebHashHistory,createWebHistory} from 'vue-router';
// import About from "@/views/About.vue";
// import Home from "@/views/Home.vue";
// import可以进行分包处理  通过webpackChunkName魔法注释
// 路由的懒加载
const Home = () => import(/* webpackChunkName: 'home' */'@/views/Home.vue');
const About = () => import(/* webpackChunkName: 'about' */'@/views/About.vue');
// 创建路由： 映射关系
const router = createRouter({
    // 指定采用我们的模式：hash模式 ： 映射关系
    // history:createWebHashHistory(),

    history: createWebHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            name:'home',
            path:"/home",
            component:Home,
            meta:{
                name:'hello',
                age:12
            }
        },
        {
            name:'about',
            path:"/about",
            component:About,
        },
        {
            path:'/user/:id',
            component:()=> import('../views/User.vue'),
        },
        {
            path:"/:pathMatch(.*)*",
            component:()=> import('../views/NotFound.vue'),
        }
    ]
})

export default router