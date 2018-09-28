<template>
    
    <el-carousel :interval="3000" type="card" height="600px">
        <el-carousel-item v-for="item in carousel" :key="item">
            <img :src="item" width="100%" class="car"/>
        </el-carousel-item>
    </el-carousel>
        
</template>

<script>
    export default {
        name:'main',
        data() {
            return {
                carousel: [
                    require('@/assets/car/1.jpg'),
                    require('@/assets/car/2.jpg'),
                    require('@/assets/car/3.jpg'),
                    require('@/assets/car/4.jpg')
                ],
            }
        },
    }
</script>

<style scoped>

  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .car{
      position: absolute;
      top:50%;
      transform: translateY(-50%)
  }

</style>