<template>
    <div class="comment-container">
        <h3>留言板</h3>
        <hr>
        <textarea placeholder="请输入要品论的内容(最多吐槽20字)" maxlength="120" v-model="commentInfo"></textarea>
        <mt-button type="primary" size="large" @click="publish">发表留言</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, i) in showList" :key="i">
                <div class="comment-title">
                    <span>第
                        <span class="num">{{ i + 1 }}</span>楼&nbsp;&nbsp;用户：
                        <span class="user">{{ item.author }}</span>
                    </span>
                    <span>
                        发表时间：
                        <span class="time">{{ item.time | dateFormat }}</span>
                    </span>
                </div>
                <div class="comment-body">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            <hr>
        </div>
        <mt-button type="danger" size="large" plain @click="add" ref="btn">{{ btnState }}</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            // 存放的是全部的数据
            commentList: [],
            code: 1,
            commentInfo: "",
            // 存放的是显示的数据
            showList: [],
            // btn的文字
            btnState: "加载更多"
        };
    },
    created() {
        this.getComment();
    },
    methods: {
        getComment() {
            let news = JSON.parse(localStorage.getItem("commentInfo"));
            this.showList = news || [];
            this.$http
                .get("../../data/comment.json")
                .then(result => {
                    this.commentList = result.body.comments;
                    this.commentList = this.showList.concat(this.commentList);
                    this.showList = this.commentList.slice(0, 10);
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
            this.showList = this.commentList.slice(0, this.code * 10);
            this.btnState =
                this.code * 10 > this.commentList.length
                    ? "到底啦...不能再往下滑啦~"
                    : "加载更多";
        },
        publish() {
            // 发表评论
            if (this.commentInfo != "" && this.commentInfo != null) {
                // 因为没有连接数据库，所有数据都是本地的
                // 将数据暂时存放到该数组
                // let newsList = JSON.stringify();

                let lists = [
                    {
                        author: "匿名用户",
                        content: this.commentInfo,
                        avatar:
                            "http://pic3.zhimg.com/0ecf2216c2612b04592126adc16affa2_im.jpg",
                        time: new Date(),
                        id: 0,
                        likes: 0
                    }
                ];
                // 取数据
                let list = localStorage.getItem("commentInfo");

                if (list != null && list != undefined) {
                    lists = lists.concat(JSON.parse(list));
                }

                // // 存数据
                localStorage.setItem("commentInfo", JSON.stringify(lists));
                this.commentInfo = "";
                this.showList = lists.concat(this.showList);
                Toast({
                    message: "发表成功",
                    duration: 1000
                });
            } else {
                Toast({
                    message: "留言不能为空",
                    duration: 1000
                })
            }
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
        font-size: 15px;
        margin: 0;
        height: 85px;
    }
    .comment-list {
        margin: 5px 0;
        .comment-item {
            .comment-title {
                padding: 0 3px;
                background-color: #cccccc;
                line-height: 30px;
                font-size: 12px;
                color: #555;
                display: flex;
                justify-content: space-between;
                .num {
                    color: #e4393c;
                }
                .user {
                    font-weight: bold;
                }
                .time {
                    color: #226aff;
                }
            }
            .comment-body {
                margin: 5px 0;
                text-indent: 2em;
                font-size: 13px;
            }
        }
    }
}
</style>

