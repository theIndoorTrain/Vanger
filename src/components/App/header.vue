<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" @click="toHome"><img src="@/assets/logo.png" height="60px"/>首页</el-menu-item>
        <el-menu-item index="2">任务大厅</el-menu-item>
        <el-menu-item index="3">排行榜</el-menu-item>
        <el-menu-item index="4" @click="toBBS">论坛</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name:'header',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            toBBS() {
                this.$router.push('/bbs')
            },
            toHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
a{
    text-decoration: none;
}
div{
    margin-bottom: 10px;
}
</style>