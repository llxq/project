<template>
    <div>
        <mt-swipe>
            <!-- 轮播图的 swipePircture是 父组件传递过来的 -->
            <mt-swipe-item v-for="item in photos" :key="item.url">
                <!-- isfull：接收父组件传递的值，判断是否让宽度100% -->
                <img :src="item.url" :class="{full: isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    // 父组件通过 :photos 传递过来的值
    props: ["photos", "isfull"]
};
</script>

<style lang="scss" scoped>
/*设置轮播图的高度*/
.mint-swipe {
    height: 200px;
    background-size: cover;
    img {
        // width: 100%;
        height: 100%;
    }
    .full {
        width: 100%;
    }
}
</style>

