<template>
    <div>
        <el-input size="mini" placeholder="请输入内容"  v-model="input9" class="input"></el-input>
        <el-button type="primary" icon="el-icon-search" size="mini" class="xm-a">搜索</el-button>
    </div>
</template>

<script>
    export default {
        name:'search',
    }
</script>

<style scoped>

.input{
    width: 200px;
    float: left;
}

div{
    float: right;
}


</style>