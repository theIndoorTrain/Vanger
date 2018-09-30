<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" @click="toHome"><img src="@/assets/logo.png" height="60px"/>首页</el-menu-item>
        <el-menu-item index="2">任务大厅</el-menu-item>
        <el-menu-item index="3">排行榜</el-menu-item>
        <el-menu-item index="4" @click="toBBS">论坛</el-menu-item>
        <Logout class="xm-a" v-if="isLogin" />
        <SighIn class="xm-a" v-if="!isLogin"/>
        <img src="@/assets/logo.png" class="xm-b" v-if="isLogin"/>
        <Login class="xm-a" v-if="!isLogin"/>
        </el-menu>
    </div>
</template>

<script>
    import Login from '@/components/App/login.vue'
    import SighIn from '@/components/App/sighIn.vue'
    import Logout from '@/components/App/logout.vue'
    export default {
        name:'header',
        data() {
            return {
                activeIndex: '1',
                isLogin: false,
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
        },
        components:{
            Login,
            SighIn,
            Logout,
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

.xm-a{
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}
.xm-b{
    margin-top: 3px;
    margin-right: 30px;
    float: right;
    height: 50px;
    width:50px;
    border-radius: 50%;
    border: 1px;
    border-style:solid;
    border-color: bisque;
}
</style>