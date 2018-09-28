<template>
<el-container>
  <el-aside width="200px"><Sidebar/></el-aside>
  <el-main>Main</el-main>
</el-container>
</template>

<script>
    import Sidebar from '@/components/bbs/sidebar.vue'
    export default {
        name:'bbs',
        components:{
            Sidebar,
        }
    }
</script>

<style scoped>

</style>