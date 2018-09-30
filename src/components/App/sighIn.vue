<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">注册</el-button>

        <el-dialog title="流浪者·注册" :visible.sync="dialogFormVisible" center="true" width="45">

            <el-form :model="SighInForm" ref="LoginForm" label-width="100px" class="demo-dynamic">
                <el-form-item
                    prop="email"
                    label="邮箱"
                >
                    <el-input v-model="SighInForm.email" type="email"></el-input>

                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-row>
                        <el-col :span="16"><el-input type="code" v-model="SighInForm.code"></el-input></el-col>
                        <el-col :span="7" :offset="1">验证邮箱</el-col>
                    </el-row>
                    
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="SighInForm.pass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkpass">
                    <el-input type="password" v-model="SighInForm.checkpass"></el-input>
                </el-form-item>
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name:'sighIn',
        data() {
            return {
                dialogFormVisible: false,
                SighInForm:{
                    email:'',
                    pass:'',
                    code:'',
                    checkpass:'',
                }
            }
        }    
    }
</script>

<style scoped>

</style>