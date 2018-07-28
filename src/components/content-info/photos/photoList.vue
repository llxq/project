<template>
    <div class="photoList-container">
        <!-- 顶部的滑动条 使用的是 mui 的 tab-top-webview-main -->
        <!-- mui-fullscreen(全屏的样式) -->

        <!-- 若使用区域滚动组件，需手动初始化scroll控件
                滑动需要加载 js脚本，使用方式地址：http://dev.dcloud.net.cn/mui/ui/#scroll
         -->

        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" @tap="getByIndex(0, 10)">
                        全部
                    </a>
                    <a class="mui-control-item" @tap="getByIndex(10, 20)">
                        搞笑
                    </a>
                    <a class="mui-control-item" @tap="getByIndex(20, 30)">
                        美女
                    </a>
                    <a class="mui-control-item" @tap="getByIndex(30, 40)">
                        热点
                    </a>
                    <a class="mui-control-item" @tap="getByIndex(40, 50)">
                        娱乐
                    </a>
                    <a class="mui-control-item" @tap="getByIndex(50, 60)">
                        动漫
                    </a>
                </div>
            </div>
        </div>
        <!-- 图标懒加载，使用的是 mint-ui 提供的 lazy-load -->
        <!-- 为 img元素添加 v-lazy 指令，指令的值为图片的地址，同时需要设置图片在加载时的样式 -->
        <ul class="photo-list">
            <router-link v-for="item in showList" :key="item.url" to="/home/photoInfo" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h3 class="info-title">这个是一个图片的标题</h3>
                    <div class="info-body">摘要：生而与众不同，后来又背负着太多的责任与使命，迷茫，无措，不知去向何方，想要在俗世里活的平凡都成了最大的心愿</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入 mui的js文件。让滑动条正常滑动
// 导入会引出 语法错误，该js文件中，使用了 arguments、callee、caller(调用者)，这在 严格模式(strict) 中是不能使用的
// 这个时候需要 移除webpack的 严格模式
import mui from "../../../lib/mui/js/mui.min.js";

import { Toast } from "mint-ui";

export default {
    data() {
        return {
            photoList: [],
            showList: []
        };
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.$http
                .get("/photoShare")
                .then(result => {
                    this.photoList = result.body.data;
                    this.showList = this.photoList.slice(0, 10);
                })
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                });
        },
        getByIndex(start, end) {
            this.showList = this.photoList.slice(start, end);
        }
    },

    // 如果要操作 dom 元素，则最好在 mounted钩子函数中，因为该函数中，所有的 dom 元素都是最新的
    mounted() {
        // 当组件中的 dom 结构被渲染之后，再执行下面的函数
        // 使用官方提供的方法让 滚动条正常滑动
        // 页面一进来的时候，是不能滑动的，所以我们需要将该方法，放在钩子函数中
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
};
</script>

<style lang="scss" scoped>
/* 在滑动的时候，会出现错误，虽然不影响页面，我们可以加上下面这个样式，可以去除该错误信息
        错误信息出现的原因：是 Chrome 为了提高页面的滑动流畅度而捣鼓出来的玩意 */
/* 加了个该样式之后，tab栏 不能切换了。，并且刚进入页面的时候，不能滑动，需要刷新 */
* {
    touch-action: pan-y;
}
.photoList-container {
    #slider {
        line-height: 20%;
        position: fixed;
        background-color: #fff;
        z-index: 900;
        border-bottom: 1px solid #ccc;
    }
    .photo-list {
        list-style: none;
        padding: 50px 10px 10px 10px;
        margin: 0;
        padding-bottom: 10px;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            .info {
                color: #ffffff;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 80px;
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 13px;
                }
            }
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
    }
}
</style>

