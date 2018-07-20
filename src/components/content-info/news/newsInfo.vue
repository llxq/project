<template>
    <div class="newsInfo">
        <h3 class="title">{{ title }}</h3>
        <p class="subTitle">
            <span>发表时间：2017-12-12 12:12:12</span>
            <span>点击：{{ id }}次</span>
        </p>
        <hr>

        <!-- 详情 -->
        <div class="content" v-html="message"></div>

        <!-- 评论 -->
        <comment></comment>
    </div>
</template>

<script>
// 导入 评论组件
import comment from '../../comment/comment.vue'

import store from "../../../store/store.js";
export default {
    data() {
        return {
            // url中的 id
            id: this.$route.params.id,
            message: {},
            title: ''
        };
    },
    created() {
        this.getNewsInfo();
        // 这个是为了防止 刷新之后 title的值为空了
        if (this.$store.state.title != '') {
            localStorage.setItem('title',this.$store.state.title )
        }
        this.title = localStorage.getItem('title');
    },
    methods: {
        getNewsInfo() {
            this.$http
                .get("../../../data/newsInfo.json")
                .then(result => {
                    this.message = result.body.message;
                })
                .catch(err => {});
        }
    },
    store,
    // 注册组件
    components: {
        comment
    }
};
</script>

<style lang="scss">
.newsInfo {
    padding: 0 5px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subTitle {
        font-size: 14px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

