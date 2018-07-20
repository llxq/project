// 入口文件
import Vue from 'vue';

// 导入 app 组件
import App from './App.vue'

// 导入 mint-ui组件
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintUi);

// 导入 mui样式
import './lib/mui/css/mui.css'
// 需要使用到 mui的 扩展文件，需要导入，还需要导入 该字体图标的 ttf文件
import './lib/mui/css/icons-extra.css'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './routers/router.js'

// 导入 vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)

// vuex
import './store/store.js';



// 设置请求的数据接口的根路径 
// Vue.http.options.root = '';
// // 设置全局请求数据类型
// Vue.http.options.emulateJSON = true;


// 引入moment.js，可以处理时间
import moment from 'moment';

// 定义一个全局过滤器，处理时间
Vue.filter('dateFormat', str =>
    moment(str).format('YYYY-MM-DD')
)

const vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})