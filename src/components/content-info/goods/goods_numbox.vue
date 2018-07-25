<template>
    <!-- 这里使用的是 mui的 numbox -->
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="sendCount" ref="count" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js";
export default {
    methods: {
        sendCount() {
            this.$emit("getSelectedCount", parseInt(this.$refs.count.value));
        }
    },
    created () {
        mui.init();
    },
    props: ["max"],
    // 监听 max属性的值
    watch: {
        max: function(newValue, oldValue) {
            // 因为 max的值是异步获取的，有得会吧 undefined发送过来，这个时候，我们需要监听 max的值，通过 mui官网的 api 可以设置当前 文本框的最大值 通过 mui(select).numbox().setOption("max", 值)，当然了，也可以设置 步长，最小值等
            mui(".mui-numbox")
                .numbox()
                .setOption("max", newValue);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>


