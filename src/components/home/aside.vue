<template>
    <div class="bg">
        <img src="@/assets/logo.png" width="135px" height="135px" class="logo"/>
        <h3>零度微笑</h3>
        <ul>
            <li><span>姓名：</span><span>郭广明</span></li>
            <li><span>年龄：</span><span>18</span></li>
            <li><span>性别：</span><span>男</span></li>
            <li><span>等级：</span><span>34</span></li>
            <li><span>邮箱：</span><span>1373572467@qq.com</span></li>
        </ul>
        <div>
            <span>个性签名：</span>
            <p>我的目标，星辰大海。</p>
        </div>
        <ul>
            <li><span>关注：</span><a>20</a></li>
            <li><span>粉丝：</span><a>20</a></li>
        </ul>
        <ul>
            <li><a href="/#/home/data_update">修改资料</a></li>
            <li><a href="/#/home/pass_update">修改密码</a></li>
            <li><a href="/#/home/myhome">个人主页</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'aside',
        data() {
            return {
                user: null
            }
        },
        methods: {
            to(address) {
                
            }
        },
        created() {
            this.user = this.$route.query
        }
    }
</script>

<style scoped>
.bg {
    margin: 20px 20px 20px 50px;
}
.logo{
    border: 1px solid;
}
.bg ul{
    padding: 0;
}
.bg ul li{
    list-style-type: none;
}
</style>