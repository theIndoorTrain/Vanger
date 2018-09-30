<template>
    <div>
        <el-row>
            <el-col :span="12">
            <input type="text" v-model="title"  style="border:0px;">
            </el-col>
            <el-col :span="12">
                <el-select v-model="value4" clearable placeholder="分类">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-check" size="mini">保存</el-button>
                    <el-button type="primary" icon="el-icon-share" size="mini">分享</el-button>
                    <el-button type="primary" icon="el-icon-delete" size="mini">清空</el-button>
                </el-button-group>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'title',
        data() {
            return {
                title: '新建一个title',
                options:[],
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>

input{
    font-size: 25px;
    font-weight: bold;
    margin-top: 5px;
}

div{
    margin: 5px 0;
}



</style>