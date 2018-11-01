<template>
    <el-button type="text" @click="logout" class="xm-a">注销</el-button>
</template>

<script>
    export default {
        name:'logout',
        methods: {
            logout() {
                var that = this
                this.$confirm('此操作将退出账号, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '注销成功!'
                });
                that.$emit('logout')
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消注销'
                });          
                });
            }
        }
    }
</script>

<style scoped>

.xm-a{
    color: #fff;
}

</style>