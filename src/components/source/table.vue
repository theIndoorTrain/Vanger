<template>
    <div class="bg">
        <h1>最新最热</h1>
        <el-table :data="source" border="true" stripe="true"  style="width: 100%">
          <el-table-column
            prop="name"
            label="资源名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="money"
            label="下载价格"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="上传日期">
          </el-table-column>
          <el-table-column
            prop="downloadCount"
            label="下载量">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
            <el-button  type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name:'table',
        data() {
        return {
          source: [{
            id: 101,
            name: '格列佛游记.epub',
            date: '2018-10-05',
            money: 55.01,
            downloadCount: 1001,
          },{
            id: 102,
            name: '格列佛游记.epub',
            date: '2018-10-05',
            money: 55.00,
            downloadCount: 1001,
          }]
        }
      }
    }
</script>

<style scoped>

.bg {
    width: 80%;
    margin: 0 auto;
}

</style>