<template>
    <div class="bg">
      <el-form label-position="top" label-width="80px">
        <el-form-item label="分享心情">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="说点什么吧" v-model="textarea3"/>
        </el-form-item>
        <el-form-item label="上传图片">
            <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>
        <el-button type="info">发表</el-button>
        <el-button type="info">保存</el-button>
      </el-form>
    </div>
</template>

<script>
    export default {
        name:'create',
        data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
    }
</script>

<style scoped>

.bg {
    width: 60%;
    margin: 150px auto;
}

</style>