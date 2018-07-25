import VueRouter from 'vue-router';

// 导入路由
import Home from '../components/content/Home.vue';
import Member from '../components/content/Member.vue';
import shopCar from '../components/content/shopCar.vue';
import Search from '../components/content/Search.vue';
import newsList from '../components/content-info/news/newsList.vue';
import newsInfo from '../components/content-info/news/newsInfo.vue';
import photoList from '../components/content-info/photos/photoList.vue';
import photoInfo from '../components/content-info/photos/photoInfo.vue';
import goodsList from '../components/content-info/goods/goodsList.vue';
import goodsInfo from '../components/content-info/goods/goodsInfo.vue';
import goodsIntroduce from '../components/content-info/goods/goodsIntroduce.vue';
import goodsComment from '../components/content-info/goods/goodsComment.vue';
import leaveMessage from '../components/comment/leaveMessage.vue';

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
            path: '/home/newsInfo',
            component: newsInfo
        },
        {
            path: '/home/photoShare',
            component: photoList
        },
        {
            path: '/home/photoInfo',
            component: photoInfo
        },
        {
            path: '/home/goodsList',
            component: goodsList
        },
        {
            path: '/home/goodsInfo',
            component: goodsInfo
        },
        {
            path: '/home/goodsComment',
            component: goodsComment
        },
        {
            path: '/home/goodsIntroduce',
            component: goodsIntroduce
        }
        ,
        {
            path: '/home/leaveMessage',
            component: leaveMessage
        }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认路由高亮样式
})