<template>
    <div class="bg">
        <el-form label-position="top" label-width="80px">
            <el-form-item label="资源名称">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="资源介绍">
                <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="说点什么吧" v-model="textarea3"/>
            </el-form-item>
            是否收费<el-switch v-model="isPay" active-color="#13ce66"></el-switch>
            <el-form-item label="收费金额" v-if="isPay">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="上传资源">
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"  multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">文件大小不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="上传资源背景图">
                <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-button type="info">发布</el-button>
            <el-button type="info">保存</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'create',
        data() {
            return {
                isPay: false
            }
        },
    }
</script>

<style scoped>

.bg {
    width: 60%;
    margin: 0 auto;
}

</style>