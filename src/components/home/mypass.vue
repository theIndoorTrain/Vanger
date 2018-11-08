<template>
    <div class="bg">
        <el-form  label-width="100px">
            <el-form-item label="当前密码">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="确认新密码">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info">修改密码</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'mypass',
    }
</script>

<style scoped>

.bg {
    width: 500px;
    margin: 100px auto;
}

</style>