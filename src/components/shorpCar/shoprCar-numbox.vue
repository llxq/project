<template>
    <!-- 这里使用的是 mui的 numbox -->
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="count" @change="sendCount" ref="count" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    data() {
        return {};
    },
    created() {
        mui.init();
    },
    methods: {
        sendCount() {
            this.$store.commit("updateShorpCar", {
                id: this.shorpId,
                count: this.$refs.count.value
            });
        }
    },
    props: ["count", "shorpId"]
};
</script>

<style lang="scss" scoped>
</style>


