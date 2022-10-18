//导入路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'

//调用
Vue.use(VueRouter)

const Category = () => import('views/category/Category')
const Home = () => import('views/home/Home')
const ShopCar = () => import('views/shopCar/ShopCar')
const Mine = () => import('views/mine/Mine')
const Detail = () => import('views/detail/Detail')

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/category', component: Category },
    { path: '/home', component: Home },
    { path: '/shopCar', component: ShopCar },
    { path: '/mine', component: Mine },
    { path: '/detail', component: Detail }
]

const router = new VueRouter({
    //设置路由映射
    routes,
    //设置导航模式为h5中的history
    mode: 'history',
})

export default router