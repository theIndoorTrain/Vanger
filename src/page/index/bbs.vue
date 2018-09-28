<template>
<el-container>
  <el-aside width="150px"><Sidebar/></el-aside>
  <el-main class="xm-a"><router-view/></el-main>
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

.xm-a{
    padding: 0;
}

</style>