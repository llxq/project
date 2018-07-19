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

const vm = new Vue({
    el: '#app',
    render: c => c(App)
})