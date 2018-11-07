<template>
    <div>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" @click="to('/home')">我的心情</el-menu-item>
  <el-menu-item index="2" @click="to('/home/task')">我的任务</el-menu-item>
  <el-menu-item index="3" @click="to('/home/source')">我的资源</el-menu-item>
  <el-menu-item index="4"  @click="to('/home/interest')">我的关注</el-menu-item>
  <el-menu-item index="5" @click="to('/home/message')">消息中心</el-menu-item>
  <el-submenu index="6">
    <template slot="title"><i class="el-icon-circle-plus-outline"></i></template>
    <el-menu-item index="6-1" @click="to('/home/bbs_create')">心情</el-menu-item>
    <el-menu-item index="6-2" @click="to('/home/task_create')">任务</el-menu-item>
    <el-menu-item index="6-3" @click="to('/home/source_create')">资源</el-menu-item>
  </el-submenu>
</el-menu>
    </div>
</template>

<script>
    export default {
        name:'header',
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            to(address) {
                this.$router.push(address)
            }
        }
    }
</script>

<style scoped>

</style>