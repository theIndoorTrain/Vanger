<template>
    <div class="bg">
        <div class="header">
            <span>浏览了1034次</span>
            <div class="icon">
                <span class="love"><i class="el-icon-star-off"/></span>
                <span class=""><i class="el-icon-edit-outline"/></span>
            </div>
        </div>
        <Comment/>
        <div @click="doComment" v-show="isComment">
            <el-input v-model="input" placeholder="评论"></el-input>
        </div>
        <div v-if="!isComment">
            <el-input type="textarea" :rows="3" placeholder="评论" v-model="textarea" @blur="doComment" autofocus="true"></el-input>
            <el-button type="info" class="button">提交</el-button>
        </div>
    </div>
</template>

<script>
import Comment from '@/components/bbs/vanger/comment.vue';
    export default {
        name:'footer',
        data() {
            return {
                isComment: true
            }
        },
        methods:{
            doComment(falg) {
                this.isComment = !this.isComment
            }
        },
        components:{
            Comment,
        }
    }
</script>

<style scoped>

.bg {
    padding: 10px 15px;
    width:700px;
    background: #2F2E2E;
    color: #fff;
}

.header {
    position: relative;
}

.icon span {
    font-size: 30px;
}

.love {
    margin-right: 15px;
}

.icon {
    position: absolute;
    top: 5px;
    right: 20px;
}

.button {
    position: relative;
    margin-top: 10px;
    left: 620px;
}


</style>