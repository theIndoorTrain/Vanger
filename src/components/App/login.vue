<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true" class="xm-a">登录</el-button>

        <el-dialog title="流浪者·登录" :visible.sync="dialogFormVisible" center="true" width="40%">

            <el-form :model="LoginForm" ref="LoginForm" label-width="100px" class="demo-dynamic">
                <el-form-item
                    prop="email"
                    label="邮箱"
                >
                    <el-input v-model="LoginForm.email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="LoginForm.pass"></el-input>
                </el-form-item>
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="doLogin">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>

<script>
    export default {
        name:'login',
        data() {
            return {
                dialogFormVisible: false,
                LoginForm:{
                    email:'',
                    pass:'',
                },
                user:{
                        name:'xm'
                }
            }
        },
        methods: {
            doLogin() {
                if(this.LoginForm.email=="admin") {
                    this.dialogFormVisible = false
                    this.$emit('login',this.user)
                    return
                }
                this.dialogFormVisible = true
            }
        },
    }
</script>

<style scoped>

.xm-a{
    color: #fff;
}

</style>