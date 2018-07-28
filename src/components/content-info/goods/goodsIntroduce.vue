<template>
    <div class="newsInfo">
        <h3 class="title">这个是图文介绍</h3>
        <p class="subTitle">
            <span>发表时间：2017-12-12
            </span>
            <span>点击：
                <span class="subTitme-num">520</span>&nbsp;次
            </span>
        </p>
        <hr>

        <!-- 详情 -->
        <div class="content" v-html="message"></div>
        <br>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import store from "../../../store/store.js";
export default {
    data() {
        return {
            message: {}
        };
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http
                .get("/newsInfo")
                .then(result => {
                    this.message = result.body.message;
                })
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.newsInfo {
    padding: 0 5px;
    .title {
        font-size: 18px;
        text-align: center;
        margin: 15px 0;
        color: #226aff;
    }
    .subTitle {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        .subTitme-num {
            color: #226aff;
        }
    }
    .content {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>