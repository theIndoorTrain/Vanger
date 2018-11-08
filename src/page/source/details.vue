<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>格列佛游记</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <Card/>
    </div>
</template>

<script>
    import Card from '@/components/source/card.vue';
    export default {
        name:'details',
        components:{
            Card,
        }
    }
</script>

<style scoped>

.breadcrumb {
    width: 70%;
    margin: 0 auto;
    padding: 20px 0;
}

</style>