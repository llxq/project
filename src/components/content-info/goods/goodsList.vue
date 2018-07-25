<template>
    <div class="goods-list">
        <!-- 没有数据，只能自己写了。。。。 -->
        <router-link class="goods-item" to="/home/goodsInfo" tag="div">
            <img src="https://gw1.alicdn.com/bao/uploaded/i3/2616970884/TB1.5DtDYGYBuNjy0FoXXciBFXa_!!0-item_pic.jpg_250x250.jpg" alt="">
            <h4 class="goods-title">Apple苹果 iPhone X</h4>
            <div class="goods-info">
                <p class="goods-info-price">
                    <span class="price-now">￥7388</span>
                    <span class="price-old">￥9488</span>
                </p>
                <p class="goods-info-sell">
                    <span>520人付款</span>
                </p>
            </div>
        </router-link>
        <router-link class="goods-item" to="/home/goodsInfo" tag="div">
            <img src="https://img10.360buyimg.com/n2/s240x240_jfs/t21253/51/490326728/248563/7bc0467/5b0e911eN336f5e02.jpg!q70.jpg">
            <h4 class="goods-title">尼康（Nikon） D850 单反数码照相机 </h4>
            <div class="goods-info">
                <p class="goods-info-price">
                    <span class="price-now">￥7388</span>
                    <span class="price-old">￥9488</span>
                </p>
                <p class="goods-info-sell">
                    <span>520人付款</span>
                </p>
            </div>
        </router-link>
        <router-link class="goods-item" to="/home/goodsInfo" tag="div">
            <img src="https://img10.360buyimg.com/n2/s240x240_jfs/t17956/336/1435876905/172633/8097dbea/5aca3e17Neec76e40.jpg!q70.jpg">
            <h4 class="goods-title">华为(HUAWEI) MateBook X Pro </h4>
            <div class="goods-info">
                <p class="goods-info-price">
                    <span class="price-now">￥7388</span>
                    <span class="price-old">￥9488</span>
                </p>
                <p class="goods-info-sell">
                    <span>520人付款</span>
                </p>
            </div>
        </router-link>
        <router-link class="goods-item" to="/home/goodsInfo" tag="div" v-for="(item, index) in num" :key="index">
            <img src="https://gw1.alicdn.com/bao/uploaded/i3/2616970884/TB1.5DtDYGYBuNjy0FoXXciBFXa_!!0-item_pic.jpg_250x250.jpg" alt="">
            <h4 class="goods-title">Apple苹果 iPhone X</h4>
            <div class="goods-info">
                <p class="goods-info-price">
                    <span class="price-now">￥7388</span>
                    <span class="price-old">￥9488</span>
                </p>
                <p class="goods-info-sell">
                    <span>520人付款</span>
                </p>
            </div>
        </router-link>

        <mt-button type="danger" size="large" @click="add">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [],
            num: 3
        };
    },
    methods: {
        // 获取所有数据
        getAllList() {},
        // 没有数据。。。
        add() {
            this.num += 5;
        }
    }
};
</script>

<style lang="scss" scoped>
.goods-list {
    p {
        margin: 0;
        padding: 5px;
    }
    padding: 8px;
    display: flex;
    /*换行*/
    flex-flow: wrap;
    justify-content: space-between;
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 4px;
        padding: 2px;
        display: flex;
        /*当 title长了的话，会导致高度边长，下面留有空白，是因为 flex布局*/
        /*修改主轴方向 为竖方向*/
        flex-direction: column;
        /*让他的元素，上下对齐，因为改变了主轴方向*/
        justify-content: space-between;

        /*当图片没有加载出来的时候，应该给一个高度，不能让他挤一起*/
        min-height: 270px;
        img {
            width: 100%;
        }
        .goods-info {
            background-color: #eeeeee;
            .goods-info-price {
                .price-now {
                    color: red;
                    font-size: 15px;
                    font-weight: bold;
                }
                .price-old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .goods-info-sell {
                font-size: 12px;
                margin-left: 2px;
            }
        }
    }
    .goods-title {
        font-size: 15px;
    }
}
</style>

