<template>
    <div class="newsInfo">
        <h3 class="title">{{ title }}</h3>
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
        <!-- 评论 -->
        <comment></comment>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
// 导入 评论组件
import comment from "../../comment/comment.vue";
export default {
    data() {
        return {
            message: {},
            title: ""
        };
    },
    created() {
        this.getNewsInfo();
        // 这个是为了防止 刷新之后 title的值为空了
        if (this.$store.state.title != "") {
            localStorage.setItem("title", this.$store.state.title);
        }
        this.title = localStorage.getItem("title");
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
            /* this.$http
                .jsonp(
                    "http://news-at.zhihu.com/api/2/news/" + this.id,
                    {},
                    {
                        headers: { "Content-Type": "application/json" },
                        emulateJSON: true,
                        jsonp: "_callback"
                    }
                )
                .then(result => {
                    console.log(result.body);
                })
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                }); */
        }
    },
    // 注册组件
    components: {
        comment
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