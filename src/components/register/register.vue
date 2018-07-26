<template>
    <div class="login">
        <div class="hint" v-show="flag">
            <h1>{{ msg }}</h1>
        </div>
        <h1>用户注册</h1>
        <form class="login-form">
            <div class="user">
                <input type="text" placeholder="注册账号" maxlength="6" ref="user" @focus="hidden">
            </div>
            <div class="password">
                <input type="password" placeholder="密码" ref="pwd" @focus="hidden">
            </div>
            <div class="password">
                <input type="password" placeholder="确认密码" ref="affirmPwd" @focus="hidden">
            </div>
            <div class="submit">
                <mt-button type="danger" size="large" @click="register">注册</mt-button>
            </div>
        </form>
        <div class="info">
            <router-link href="#" to="/login">已有账号</router-link>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            msg: "",
            flag: false
        };
    },
    methods: {
        hidden() {
            this.flag = false;
        },
        register() {
            let user = this.$refs.user.value.replace(/(^\s*)|(\s*$)/g, "");
            let pwd = this.$refs.pwd.value.replace(/(^\s*)|(\s*$)/g, "");
            let affirmPwd = this.$refs.affirmPwd.value.replace(
                /(^\s*)|(\s*$)/g,
                ""
            );
            if (user != undefined && user != "") {
                if (pwd != undefined && pwd != "") {
                    if (affirmPwd != undefined && affirmPwd != "") {
                        if (pwd === affirmPwd) {
                            let userInfos =
                                JSON.parse(localStorage.getItem("userInfo")) ||
                                [];
                            userInfos.forEach(item => {
                                item.isLogin = false;
                            });
                            userInfos.push({
                                user: user,
                                pwd: pwd,
                                isLogin: true
                            });
                            localStorage.setItem(
                                "userInfo",
                                JSON.stringify(userInfos)
                            );
                            Toast({
                                message: "注册成功",
                                duration: 1000
                            });
                            this.$router.push("/userInfo");
                            this.$store.commit("updateLoginState", user);
                        } else {
                            this.msg = "输入的密码不一致";
                            this.flag = true;
                            return;
                        }
                    } else {
                        this.msg = "请确认密码";
                        this.flag = true;
                        return;
                    }
                } else {
                    this.msg = "请输入密码";
                    this.flag = true;
                    return;
                }
            } else {
                this.msg = "请输入账号";
                this.flag = true;
                return;
            }
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

