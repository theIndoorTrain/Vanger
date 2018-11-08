<template>
    <div class="bg">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>任务详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <Task class="task"/>
        <div class="form">
            <el-form label-position="top" label-width="80px">
                <el-form-item label="输入验证码">
                    <el-input ><el-button slot="append">验证邮箱</el-button></el-input>
                </el-form-item>
                <el-button type="info">接收任务</el-button>
                <el-button type="info">返回</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Task from '@/components/task/task.vue';
    export default {
        name:'details',
        components:{
            Task,
        }
    }
</script>

<style scoped>

.task {
    margin: 20px auto;
}

.form {
    width: 60%;
    margin: 20px auto 0;
    padding: 0 0 100px;
}

.breadcrumb {
    width: 70%;
    margin: 0 auto;
    padding: 20px 0;
}

</style>