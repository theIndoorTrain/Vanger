<template>
    <div class="bg">
        <h2>任务：</h2>
        <span class="title">寻找失落的马</span>
        <h2>任务详情：<i class="el-icon-arrow-down" @click="doShow" v-if="!isShow"/><i class="el-icon-arrow-up" @click="doShow" v-if="isShow"/></h2>
        <div v-if="isShow" class="dec">
            <h1>任务描述：</h1>
            <p class="title">这座桥在城市的中间，高高隆起在从这里穿过的铁路上面。它是小城隆起的脊背，它也是小城的胸口和心脏。它是这个城市的少女，因为它是一道亮丽的风景。它是这个城市的老人，因为它包含了这个城市的许多记忆。虽然它并不雄伟壮丽，但人们把它叫天桥。“天桥”两个字，体现的是人们藉于它的一种骄傲。</p>
            <h1>任务资料：</h1>
        </div>
        <div>
            <h2>任务状况： 正在进行中。。。</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name:'task',
        data() {
            return {
                isShow: false
            }
        },
         methods: {
            doShow() {
                this.isShow = ! this.isShow
            }
        },
    }
</script>

<style scoped>

.bg {
    width: 70%;
    padding: 10px 30px;
    border-radius:35px;
    background-image: url("../../assets/bg/bg1.jpg")
}

.dec {
    padding: 5px 30px;
}

.title {
    font-style:oblique;
    font-size: 20px;
}

</style>