import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';
Vue.use(VueRouter);


// import loginRouter from './modules/login';
import errorRouter from './modules/error';
import ntdxRouter from './modules/ntdx';

export const constantRoutes = [
    {
        path: '/',
        redirect: '/ntdx/index',
        // component: () => import('@/views/dashboard/index')
    },
    // loginRouter,
    errorRouter,
    ntdxRouter
];

const createRouter = () => new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: constantRoutes
});
const router = createRouter();

// router.beforeEach((to, from, next) => {
//     if (!store.state.isLogin && to.name != '登录页') {
//         next({
//             path: '/login?from=' + encodeURIComponent(location.href)
//         });
//     } else {
//         next(() => {
//             store.commit("SET_KEEP_ALIVE", ["addProject"])
//         });
//     }
// });
router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next()
})



// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router;

