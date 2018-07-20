<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要品论的内容(最多吐槽20字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, i) in commentList" :key="i">
                <div class="comment-title">
                    <span>第{{ i + 1 }}楼&nbsp;&nbsp;用户：{{ item.author }}&nbsp;&nbsp;发表时间：{{ item.time | dateFormat }}</span>
                </div>
                <div class="comment-body">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            <hr>
        </div>
        <mt-button type="danger" size="large" plain @click="add">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            commentList: [],
            code: 1
        };
    },
    created() {
        this.getComment();
    },
    methods: {
        getComment() {
            this.$http
                .get("../../data/comment.json")
                .then(result => {
                    if (this.code === 1) {
                        this.commentList = result.body.comments.slice(
                            0,
                            10 * this.code
                        );
                    } else if (this.code === 2) {
                        this.commentList = result.body.comments.slice(
                            0,
                            10 * this.code
                        );
                    } else if (this.code === 3) {
                        this.commentList = result.body.comments.slice(
                            0,
                            10 * this.code
                        );
                    } else if (this.code === 4) {
                        this.commentList = result.body.comments.slice(
                            0,
                            10 * this.code
                        );
                    }
                })
                .catch(err => {
                    Toast({
                        message: "获取新闻列表失败",
                        duration: 3000
                    });
                });
        },
        add() {
            this.code++;
            this.getComment();
        }
    }
};
</script>

<style lang="scss" scoped>
.comment-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        margin: 0;
        height: 85px;
    }
    .comment-list {
        margin: 5px 0;
        .comment-item {
            .comment-title {
                background-color: #cccccc;
                line-height: 30px;
                font-size: 15px;
            }
            .comment-body {
                margin: 5px 0;
                text-indent: 2em;
                font-size: 16px;
                color: #555;
            }
        }
    }
}
</style>

