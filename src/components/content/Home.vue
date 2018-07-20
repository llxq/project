<template>
    <div>
        <!-- 轮播图：使用 mint-ui 的 轮播图 -->
        <mt-swipe>
            <mt-swipe-item v-for="(item, index) in swipePicture" :key="index">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格：使用 mui 的 grid-defefault -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swipePicture: []
        };
    },
    created() {
        this.getSwipe();
    },
    methods: {
        // 获取图片数据
        getSwipe() {
            this.$http
                .get("https://www.apiopen.top/meituApi?page=5")
                .then(result => {
                    if (result.body.code === 200) {
                        this.swipePicture = result.body.data.slice(0, 3);
                    }
                })
                .catch(err => {});
        }
    }
};
</script>

<style lang="scss" scoped>
/*设置轮播图的高度*/
.mint-swipe {
    height: 200px;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    .mui-media-body {
        font-size: 13px;
    }
    li {
        a {
            span {
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                border-radius: 50%;
                color: #fff;
            }
        }
        &:nth-child(1) a span {
            background-color: #1fd59a;
        }
        &:nth-child(2) a span {
            background-color: #fc3c4e;
        }
        &:nth-child(3) a span {
            background-color: #3d80fe;
        }
        &:nth-child(4) a span {
            background-color: #2bc2f7;
        }
        &:nth-child(5) a span {
            background-color: #fc4000;
        }
        &:nth-child(6) a span {
            background-color: #ff772b;
        }
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>

