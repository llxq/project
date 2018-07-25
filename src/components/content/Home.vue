<template>
    <div>
        <!-- 轮播图：使用 mint-ui 的 轮播图 -->
        <!-- :isfull 宽度是否自适应 false是 -->
        <swiper :photos="swipePicture" :isfull="true"></swiper>

        <!-- 九宫格：使用 mui 的 grid-defefault -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoShare">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片欣赏</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/leaveMessage">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// 导入轮播图组件
import swiper from "../carousel/carouselPhots.vue";
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
    },
    // 挂载轮播图
    components: {
        swiper
    }
};
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    padding: 6px;
    .mui-media-body {
        font-size: 13px;
    }
    li {
        border-radius: 50%;
        padding: 15px;
        a {
            // 新闻资讯 商品购买
            .mui-icon-extra-order,
            .mui-icon-extra-cart {
                font-size: 26px;
            }
            // 图片欣赏
            .mui-icon-image {
                font-size: 30px;
            }
            // 留言反馈  视频专区
            .mui-icon-chatbubble,
            .mui-icon-videocam,
            .mui-icon-phone {
                font-size: 36px;
            }

            span {
                width: 40px;
                height: 40px;
                line-height: 40px;
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

