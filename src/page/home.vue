<template>
    <el-container>
        <el-aside width="20%" class="aside"><Aside/></el-aside>
        <el-container class="con">
            <el-header class="header"><Header/></el-header>
            <el-main class="main"><router-view/>
            </el-main>
            <el-footer class="footer"><Footer/></el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from '@/components/home/aside.vue';
    import Header from '@/components/home/header.vue';
    import Footer from '@/components/App/footer.vue';
    export default {
        name:'home',
        components:{
            Aside,
            Header,
            Footer,
        }
    }
</script>

<style scoped>

.aside{
    border-right: 1px solid;
    height: 100%;
    position: fixed;
    background: #dddddd;
}
.con{
    margin-left: 20%;
}

.footer{
    width: 80%;
    position: absolute;
    bottom: 0px;
    padding: 0;
}
.main{
    position: absolute;
    top:60px;
    bottom: 71px;
}

.header{
    padding: 0;
}

</style>