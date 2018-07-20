import VueRouter from 'vue-router';

// 导入路由
import Home from '../components/content/Home.vue';
import Member from '../components/content/Member.vue';
import shopCar from '../components/content/shopCar.vue';
import Search from '../components/content/Search.vue';
import newsList from '../components/content-info/news/newsList.vue';
import newsInfo from '../components/content-info/news/newsInfo.vue'

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/member',
            component: Member
        },
        {
            path: '/shopCar',
            component: shopCar
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/home/newsList',
            component: newsList
        },
        {
            path: '/home/newsInfo:id',
            component: newsInfo
        }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认路由高亮样式
})