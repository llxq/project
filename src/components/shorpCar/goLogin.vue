<template>
    <div class="goLogin">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
                    </p>
                    <p class="info">登录之后可同步购物车中的商品</p>
                    <p>
                        <mt-button type="danger" plain @click="goLogin">登录</mt-button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goLogin() {
            this.$router.push("/login");
        }
    }
};
</script>

<style lang="scss" scoped>
.goLogin {
    .mui-card-content-inner {
        border: 1px solid #ccc;
        height: 200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
            width: 60px;
            height: 60px;
        }
        .info {
            font-size: 15px;
        }
    }
}
</style>

