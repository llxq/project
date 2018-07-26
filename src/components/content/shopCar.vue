<template>
    <div class="shopCar-container">
        <!-- 使用了 mui 的 car -->
        <div class="mui-card" v-for="(item, index) in goodsList" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 使用了 mint-ui 的 form-component -->
                    <!-- 官方提供了一个 v-model属性，true代表选中，false代表未选中 -->
                    <!-- 有一个事件：change，状态发生改变就会触发该事件 -->
                    <mt-switch v-model="info.selected" @change="selectedChange(info.id, info.selected)"></mt-switch>
                    <img src="https://img.alicdn.com/bao/uploaded/TB1.5DtDYGYBuNjy0FoXXciBFXa_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp">
                    <div class="info">
                        <h3>Apple苹果 iPhone X</h3>
                        <p>
                            <span class="price">￥{{ info.price }}</span>
                            <numbox :count="info.count" :shorp-id="info.id"></numbox>
                            <a href="#" @click.prevent="remove(info.id, index)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品
                            <span class="red">{{ $store.getters.getPriceAndCount.count }}</span> 件，总价：
                            <span class="red">￥{{ $store.getters.getPriceAndCount.price }}</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbox from "../shorpCar/shoprCar-numbox.vue";
export default {
    data() {
        return {
            info: {},
            goodsList: [1]
        };
    },
    created() {
        this.getShorp();
    },
    methods: {
        getShorp() {
            JSON.parse(localStorage.getItem("shorpCar")).forEach(item => {
                this.info.id = item.id;
                this.info.count = item.count;
                this.info.price = item.price;
                this.info.selected = item.selected;
            });
        },
        remove(id, index) {
            // 删除
            this.goodsList.splice(index, 1);

            // 调用删除 的方法
            // this.$store.commit("removeById", id);
        },
        selectedChange(id, flag) {
            this.$store.commit("updateSelected", {
                id: id,
                selected: flag
            });
        }
    },
    components: {
        numbox
    }
};
</script>

<style lang="scss" scoped>
.shopCar-container {
    .mui-card {
        .mui-card-content {
            .mui-card-content-inner {
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                img {
                    width: 60px;
                    height: 60px;
                }
                .info {
                    display: flex;
                    /* 竖直方向 */
                    flex-direction: column;
                    justify-content: space-between;
                    h3 {
                        font-size: 13px;
                    }
                    .price {
                        color: red;
                        font-weight: bold;
                    }
                    p {
                        font-size: 13px;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
        }
    }
    .mui-card {
        .mui-card-content {
            .jiesuan {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .red {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>

