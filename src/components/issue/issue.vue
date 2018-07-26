<template>
    <div class="issue-contanier">
        <div class="issue-header">
            <h3>
                <i class="mui-icon mui-icon-info"></i>
                <span>问题意见</span>
            </h3>
        </div>
        <div class="issue-info">
            <textarea cols="10" rows="8" placeholder="请输入您宝贵的意见和建议。(800字以内)"></textarea>
        </div>
        <div class="issue-footer">
            <span>欢迎您为我们提出宝贵的意见和建议，您留下的任何信息都将用来改善我们的网站</span>
        </div>
        <div class="submit">
            <mt-button size="large" type="primary">提交</mt-button>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.issue-contanier {
    textarea::-webkit-input-placeholder {
        color: #ccc;
    }
    textarea::-moz-placeholder {
        color: #ccc;
    }
    textarea:-moz-placeholder {
        color: #ccc;
    }
    textarea:-ms-input-placeholder {
        color: #ccc;
    }
    .issue-header {
        padding: 10px 10px 5px 10px;
        h3 {
            font-size: 15px;
            font-weight: none;
            color: #666;
        }
    }
    .issue-info {
        padding: 5px;
        textarea {
            border-radius: 5px;
        }
    }
    .issue-footer {
        display: flex;
        justify-content: center;
        padding: 0 40px;
        font-size: 15px;
        color: #ccc;
    }
    .submit {
        padding: 20px 10px;
    }
}
</style>

