import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: '',
        // 将数据存储到缓存。通过缓存获取
        shorpCar: JSON.parse(localStorage.getItem('shorpCar')) || [],

        //[
        //     // {id: 商品的id，count：商品的数量，price：单价，selected：是否c被选中} 传数据的时候，应该按照这样的格式来
        // ]
        isLogin: '未登录'
    },
    mutations: {
        add(state, msg) {
            state.title = msg;
        },
        // 点击加入购物车
        addToCar(state, info) {
            // 如果在购物车中有这个商品的话，直接更新数量即可
            let flag = state.shorpCar.some(item => {
                if (item.id === info.id) {
                    item.count += parseInt(info.count);
                    return true;
                }
            })
            if (!flag) {
                state.shorpCar.push(info);
            }

            // 将商品信息放到缓存
            localStorage.setItem('shorpCar', JSON.stringify(state.shorpCar))
        },
        // 修改购物车商品数量
        updateShorpCar(state, info) {
            state.shorpCar.some(item => {
                if (item.id === info.id) {
                    item.count = parseInt(info.count);
                }
                // 将商品信息放到缓存
                localStorage.setItem('shorpCar', JSON.stringify(state.shorpCar))
            })
        },
        removeById(state, id) {
            // 根据 id 删除对应的数据
            state.shorpCar.some((item, i) => {
                if (item.id === id) {
                    state.shorpCar.splice(i, 1);
                    return
                }
            })
            // 将商品信息放到缓存
            localStorage.setItem('shorpCar', JSON.stringify(state.shorpCar))
        },
        // 修改商品状态
        updateSelected(state, info) {
            state.shorpCar.some((item, i) => {
                if (item.id === info.id) {
                    item.selected = info.selected;
                    return;
                }
            })
            // 将商品信息放到缓存
            localStorage.setItem('shorpCar', JSON.stringify(state.shorpCar))
        },
        // 修改登录状态
        updateLoginState(state, info) {
            state.isLogin = info;
        }
    },
    // 相当于是 计算属性
    getters: {
        // 每当 方法内部使用的值发生改变的时候，都会执行该方法
        getAll(state) {
            // 总数量 
            let allCount = 0;
            state.shorpCar.forEach(item => {
                allCount += item.count;
            })
            return allCount;
        },
        getPriceAndCount(state) {
            let allPriceAndSelected = {
                count: 0,
                price: 0
            };
            state.shorpCar.forEach(item => {
                if (item.selected) {
                    allPriceAndSelected.count = item.count;
                    allPriceAndSelected.price = item.count * item.price;
                }
            })
            return allPriceAndSelected;
        }
    }
})