<template>
    <div >
        <el-menu :default-active="activeIndex" class="el-menu-demo bg" mode="horizontal" @select="handleSelect" background-color="#2F2E2E" text-color="#fff" active-text-color="#ED1C06">
        <el-menu-item index="1" @click="to('/')"><img src="@/assets/logo.png" height="60px"/>首页</el-menu-item>
        <el-menu-item index="2" @click="to('/task')">任务大厅</el-menu-item>
        <el-menu-item index="3" @click="to('/source')">资源中心</el-menu-item>
        <el-menu-item index="4" @click="to('/bbs')">论坛</el-menu-item>
        <Logout class="xm-a" v-if="isLogin" @logout="logout"/>
        <SighIn class="xm-a" v-if="!isLogin"/>
        <img src="@/assets/logo.png" class="xm-b" v-if="isLogin" @click="to('/home')"/>
        <Login class="xm-a" v-if="!isLogin" @login="login"/>
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
                user:null,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            to(address) {
                var that = this
                if(address=="/home") {
                    this.$router.push({path:address,query:that.user})
                } else {
                    this.$router.push(address)
                }
            },
            login(user) {
                this.user=user
                this.isLogin=true
                this.$message({
                message: '登录成功！',
                type: 'success'
                });
            },
            logout(){
                this.user=null
                this.isLogin=false
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
    border: 2px;
    border-style:solid;
    border-color: bisque;
}
.bg{
    padding: 0 10%;
}
</style>