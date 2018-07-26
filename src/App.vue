<template>
    <div class="app-container">
        <!-- 顶部 header区域 -->
        <mt-header fixed title="这是标题">
            <!-- 使用了 mint-ui的 header -->
            <span to="/" slot="left" @click="goBack" class="return" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>

        <!-- 中间的路由 router-view 区域 -->
        <!-- 添加动画 -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-new" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-new" to="/member">
                <span class="mui-icon mui-icon-location"></span>
                <span class="mui-tab-label">小管家</span>
            </router-link>
            <router-link class="mui-tab-item-new" to="/shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{ $store.getters.getAll }}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-new" to="/login">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">{{ $store.state.isLogin }}</span>
            </router-link>
        </nav>
    </div>

</template>

<script>
export default {
    data() {
        return {
            flag: false
        };
    },
    methods: {
        goBack() {
            // 点击后退
            this.$router.go(-1);
        },
        getLoginState() {
            let userInfos = JSON.parse(localStorage.getItem("userInfo")) || [];
            userInfos.some(item => {
                if (item.isLogin) {
                    this.$store.commit("updateLoginState", item.user);
                    return;
                }
            });
        }
    },
    created() {
        this.flag = this.$route.path === "/home" ? false : true;
        this.getLoginState();
    },
    // 监听路由
    watch: {
        "$route.path": function(newValue) {
            if (newValue === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }

            if (newValue === "/login") {
                let userInfos =
                    JSON.parse(localStorage.getItem("userInfo")) || [];
                let isLoginState = false;
                userInfos.some(item => {
                    if (item.isLogin) {
                        isLoginState = true;
                    }
                });
                if (isLoginState) {
                    this.$router.push("/userInfo");
                } else {
                    this.$router.push("/login");
                }
            }

            if (newValue === "/shopCar") {
                let userInfos =
                    JSON.parse(localStorage.getItem("userInfo")) || [];
                let isLoginState = false;
                userInfos.some(item => {
                    if (item.isLogin) {
                        isLoginState = true;
                    }
                });
                if (isLoginState) {
                    this.$router.push("/shopCar");
                } else {
                    this.$router.push("/goLogin");
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.app-container {
    padding-top: 40px;
    overflow-x: hidden;
    padding-bottom: 50px;
    .mint-header.is-fixed {
        z-index: 1000;
    }
    .mint-header-button .is-left {
        background-color: #26a2ff;
    }
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
/*消失应该要从左往右消失*/
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    /*这个是不让 下一页的内容从下面飘上来*/
    position: absolute;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

/* 修改使用了 mui的滑动组件之后，tab无法切换问题，类名冲突了。直接 copy样式，修改名字即可 */
.mui-bar-tab .mui-tab-item-new.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-new {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-new .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-new .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

