<template>
    <div class="newsInfo">
        <h3 class="title">这个是一个图片的标题</h3>
        <p class="subTitle">
            <span>发表时间：2017-12-12
            </span>
            <span>点击：<span class="subTitme-num">520</span>&nbsp;次
            </span>
        </p>
        <hr>

        <!-- 详情 -->
        <div class="content">
            <div class="content-img">
                <img src="http://ww4.sinaimg.cn/large/610dc034jw1f5xwnxj2vmj20dw0dwjsc.jpg" alt="美女">
            </div>
            <span class="content-info">
                &nbsp;&nbsp;&nbsp;想要救紫霞，就必须要打败牛魔王，想要打败牛魔王，就必须要变成孙悟空，而一旦变成孙悟空就必须放下七情六欲，从此不能再有半点沾染。<br> &nbsp;&nbsp;&nbsp;看似简单，难的是一刹那的转身。
                <br> &nbsp;&nbsp;&nbsp;正何谓不戴金箍如何救你，带了金箍如何爱你。
                <br> &nbsp;&nbsp;&nbsp;也就是社会中的男人，不工作如何养你，工作了如何陪你。搬起砖如何抱你，放下砖如何爱你。
                <br> &nbsp;&nbsp;&nbsp;其实每个男人都是以前那个无忧无虑的至尊宝，只是随着年龄的增长不得不戴上金箍拿起金箍棒成为孙悟空去承担自己应该承担的那份责任，再也回不去以前的至尊宝。
                <br> &nbsp;&nbsp;&nbsp;电影最后那个夕阳武士说孙悟空：他好像一条狗！说出很多男人的心声
                <br><br><br>
            </span>
        </div>

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
        return {};
    },
    created() {
        // this.getNewsInfo();
    },
    methods: {
        // 请求数据，暂时不用，留着
        getNewsInfo() {
            this.$http
                .get("")
                .then(result => {})
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                });
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
    .content {
        .content-info {
            color: #999;
            line-height: 30px;
        }
    }
}
</style>

