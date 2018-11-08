<template>
    <div class="bg">
        <el-form  label-width="80px">
            <el-form-item label="上传头像">
                <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="真实姓名">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="性别">
                <template>
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="说点什么吧" v-model="textarea3"/>
            </el-form-item>
            <el-form-item>
                <el-button type="info">保存</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'mydata',
    }
</script>

<style scoped>

.bg {
    width:50%;
    margin: 50px auto;
}

</style>