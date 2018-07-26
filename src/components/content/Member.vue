<template>
    <div class="member-container">
        <div class="search">
            <div class="mui-indexed-list-search mui-input-row mui-search">
                <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索城市">
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="location">
                        <span class="mui-icon mui-icon-location"></span>
                        <span>当前定位的城市</span>
                    </p>
                    <p class="city">无法定位当前位置</p>
                </div>
            </div>
        </div>

        <div class="item">
            <p>A</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">安徽省</li>
            </ul>
        </div>
        <div class="item">
            <p>B</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">北京市</li>
            </ul>
        </div>
        <div class="item">
            <p>C</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">重庆市</li>
            </ul>
        </div>
        <div class="item">
            <p>F</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">福建省</li>
            </ul>
        </div>
        <div class="item">
            <p>G</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">甘肃省</li>
                <li class="mui-table-view-cell">广东省</li>
                <li class="mui-table-view-cell">广西壮族自治区</li>
                <li class="mui-table-view-cell">贵州省</li>
            </ul>
        </div>
        <div class="item">
            <p>H</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">湖南省</li>
                <li class="mui-table-view-cell">湖北省</li>
                <li class="mui-table-view-cell">黑龙江省</li>
                <li class="mui-table-view-cell">河北省</li>
                <li class="mui-table-view-cell">河南省</li>
                <li class="mui-table-view-cell">海南省</li>
            </ul>
        </div>
        <div class="item">
            <p>J</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">江西省</li>
                <li class="mui-table-view-cell">吉林省</li>
                <li class="mui-table-view-cell">江苏省</li>
            </ul>
        </div>
        <div class="item">
            <p>L</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">辽宁省</li>
            </ul>
        </div>
        <div class="item">
            <p>N</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">内蒙古自治区</li>
                <li class="mui-table-view-cell">宁夏回族自治区</li>
                <li class="mui-table-view-cell">黑龙江省</li>
            </ul>
        </div>
        <div class="item">
            <p>Q</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">青海省</li>
            </ul>
        </div>
        <div class="item">
            <p>S</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">山东省</li>
                <li class="mui-table-view-cell">山西省</li>
                <li class="mui-table-view-cell">陕西省</li>
                <li class="mui-table-view-cell">上海市</li>
                <li class="mui-table-view-cell">四川省</li>
            </ul>
        </div>
        <div class="item">
            <p>T</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">天津市</li>
            </ul>
        </div>
        <div class="item">
            <p>X</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">西藏自治区</li>
                <li class="mui-table-view-cell">新疆维吾尔自治区</li>
            </ul>
        </div>
        <div class="item">
            <p>Y</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">云南省</li>
            </ul>
        </div>
        <div class="item">
            <p>Z</p>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">浙江省</li>
            </ul>
        </div>

    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.search {
    height: 50px;
    padding: 5px 10px 0 10px;
}
.member-container {
    padding: 0 10px;
    ul {
        padding: 0 10px;
    }
    .item {
        p {
            padding: 5px 25px;
            background-color: #eeeeee;
            margin: 0;
            font-size: 15px;
        }
    }
    .location {
        font-size: 15px;
    }
    .city {
        font-size: 18px;
        padding: 0 25px;
        color: #226aff;
    }
}
</style>

