<template>
    <div class="bg">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name:'search',
    }
</script>

<style scoped>

.bg {
    width:80%;
    margin: 0 auto;
    padding: 20px 0;
}

</style>