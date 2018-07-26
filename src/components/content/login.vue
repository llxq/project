<template>
    <div class="login">
        <div class="hint" v-show="flag">
            <h1>用户名密码错误</h1>
        </div>
        <h1>用户登录</h1>
        <form class="login-form">
            <div class="user">
                <input type="text" placeholder="请输入账号" ref="user" @focus="hidden">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" ref="pwd" @focus="hidden">
            </div>
            <div class="submit">
                <mt-button type="primary" size="large" @click="login">登录</mt-button>
            </div>
        </form>
        <div class="info">
            <router-link href="#" to="/home/register">我要注册</router-link>
            |
            <a href="#">忘记秘密？</a>
        </div>
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
        hidden() {
            this.flag = false;
        },
        login() {
            let user = this.$refs.user.value.replace(/(^\s*)|(\s*$)/g, "");
            let pwd = this.$refs.pwd.value.replace(/(^\s*)|(\s*$)/g, "");

            let userInfos = JSON.parse(localStorage.getItem("userInfo")) || [];
            userInfos.some(item => {
                if (item.user === user) {
                    if (item.pwd === pwd) {
                        item.isLogin = true;
                        this.$store.commit("updateLoginState", user);
                        this.$router.push("/userInfo");
                    }
                } else {
                    this.flag = true;
                    return;
                }
            });
            localStorage.setItem("userInfo", JSON.stringify(userInfos));
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    .hint {
        display: flex;
        justify-content: center;
        h1 {
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            position: absolute;
            top: 80px;
            background-color: red;
        }
    }
    padding: 30% 0;
    h1 {
        text-align: center;
        margin-bottom: 20px;
        font-weight: normal;
    }
    .login-form {
        .user,
        .password {
            padding: 0 10px;
            input {
                border-radius: 20px;
            }
            input::-webkit-input-placeholder {
                color: #ccc;
            }
            input::-moz-placeholder {
                color: #ccc;
            }
            input:-moz-placeholder {
                color: #ccc;
            }
            input:-ms-input-placeholder {
                color: #ccc;
            }
        }
        .submit {
            padding: 0 10px;
            button {
                border-radius: 20px;
                height: 50px;
            }
        }
    }

    .info {
        padding: 20px;
        text-align: center;
        a {
            padding: 0 5px;
        }
    }
}
</style>

