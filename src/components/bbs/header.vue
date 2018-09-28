<template>
    <div>
        <Search/>   
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>列表</el-breadcrumb-item>
        <el-breadcrumb-item>轮表</el-breadcrumb-item>
        </el-breadcrumb>   
    </div>
</template>

<script>
import Search from '@/components/bbs/search.vue'
    export default {
        name:'bbs_header',
        components:{
            Search,
        }
    }
</script>

<style scoped>


</style>