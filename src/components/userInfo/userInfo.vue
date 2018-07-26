<template>
    <div class="userInfo">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner bgc">
                    <div class="user">
                        <img src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg" alt="用户头像">
                        <span>{{ userName }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link to="#">个人信息</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link to="#">修改密码</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link to="#">收货地址</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link to="#">我的关注</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link to="#">全部订单</router-link>
                </div>
            </div>
        </div>
        <div class="state">
            <mt-button size="large" plain type="danger" @click="exit">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: ""
        };
    },
    created() {
        this.getUserName();
    },
    methods: {
        getUserName() {
            let userInfos = JSON.parse(localStorage.getItem("userInfo")) || [];
            userInfos.some(item => {
                if (item.isLogin) {
                    this.userName = item.user;
                    return;
                }
            });
        },
        exit() {
            let userInfos = JSON.parse(localStorage.getItem("userInfo")) || [];
            userInfos.some(item => {
                if (item.isLogin) {
                    item.isLogin = false;
                    return;
                }
            });
            this.$router.push("/login");
            this.$store.commit("updateLoginState", "未登录");
            localStorage.setItem("userInfo", JSON.stringify(userInfos));
        }
    }
};
</script>

<style lang="scss" scoped>
.userInfo {
    a,
    a:hover,
    a:active,
    a:link {
        color: #aaaaaa;
        font-size: 15px;
    }
    .mui-card {
        .mui-card-content {
            .bgc {
                background: url(http://img.cdn.qiniu.dcloud.net.cn/muwu.jpg)
                    no-repeat 100% 100%;
            }
            .mui-card-content-inner {
                .user {
                    height: 150px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        padding-left: 20px;
                        font-size: 40px;
                        color: white;
                    }
                    img {
                        width: 80px;
                        height: 80px;
                    }
                }
            }
        }
    }
    .state {
        padding: 10px;
        button {
            border-radius: 20px;
        }
    }
}
</style>

