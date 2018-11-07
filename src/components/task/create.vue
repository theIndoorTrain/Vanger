<template>
    <div class="bg">
        创建任务
        <el-form label-position="top" label-width="80px">
            <el-form-item label="任务名称">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="任务描述">
                <el-input type="textarea" :rows="2"></el-input>
            </el-form-item>
            <el-form-item label="上传附件">
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"  multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">文件大小不超过500kb</div>
                    </el-upload>
            </el-form-item>
            <el-form-item label="任务截止时间">
                <el-date-picker v-model="value1" type="datetime" placeholder="选择截止时间"/>
            </el-form-item>
            <el-button type="info">发布</el-button>
            <el-button type="info">保存</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'create',
    }
</script>

<style scoped>

.bg {

    width: 60%;
    margin: 0 auto;

}

</style>