<template>
    <!-- 使用 mui 的 media-list(图文列表) 绘制新闻列表 -->
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id" @click="show(item.title)">
                <router-link to="/home/newsinfo">
                    <img :src="item.images[0]" class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <h3>{{ item.title }}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2017-12-12</span>
                            <span>点击：{{ item.id }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
// 引入 vuex
import store from "../../../store/store.js";
export default {
    data() {
        return {
            newsList: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.$http
                .get("/newsList")
                .then(result => {
                    this.newsList = result.body.stories;
                })
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                });
        },
        show(msg) {
            this.$store.commit("add", msg);
        }
    },
    store
};
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h3 {
            font-size: 15px;
            width: 200px;
        }
        .mui-ellipsis {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 12px;
                color: #226aff;
            }
        }
    }
}
</style>

