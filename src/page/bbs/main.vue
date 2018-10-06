<template>
    <div class="bg">
        <Header/>
        <hr>

        <div v-for="item in 5" :key="item">
            <table>
                <tr>
                    <td><img src="@/assets/car/1.jpg" height="120px" width="120px" /></td>
                    <td>
                        <a>今天想回家</a>
                        <p>display:inline 的作用是设置对象做为行内元素显示，inline是内联对象的默认值
                            （ps:内联对象就是不自动产生换行的元素，比如span） 而我们一般用的div是块级元素，默
                            认display属性是block, 但将div的display设置为inline的话，则多个div可以象
                            span一样显示在一行了。
                        </p>
                        <el-badge :value="20000" :max="99" class="item">
                        <el-button size="small" icon="el-icon-message">评论</el-button>
                        </el-badge>
                        <el-badge :value="100" :max="99" class="item">
                        <el-button size="small" icon="el-icon-star-off">赞</el-button>
                        </el-badge>
                        <el-badge :value="100" :max="99" class="item">
                        <el-button size="small" icon="el-icon-share">转发</el-button>
                        </el-badge>
                    </td>
                    
                </tr>
            </table>
            <hr>
        </div>
        
    </div>
</template>

<script>
import Header from '@/components/bbs/header.vue'
    export default {
        name:'bbs_main',
        components:{
            Header,
        }
    }
</script>

<style scoped>

.bg{
    padding: 20px 15px;
}

.item {
  margin-top: 10px;
  margin-right: 30px;
}

p{
    overflow: hidden;  
    display: -webkit-box;  
    -webkit-line-clamp: 3;  
    -webkit-box-orient: vertical;
    margin: 5px;
}

img{
    border-style:solid;
	border-width:1px;
    margin-right: 20px;
}


</style>