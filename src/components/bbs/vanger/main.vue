<template>
    <div class="bg">
        <p>
            也许，缘分像季节，在离离合合的轨迹上轮回，在离别的渡口，

杨柳依依，再舞一曲杨柳枝，没有言语，没有阔别，

只有那蹀躞的背影在夕阳里，被度成了一地离殇。

虽处一隅，没有万水千山，但数条狭窄的街道，匆忙的日子，

却胜似千山万水，横亘在我们中间，渺小的我们像两棵长在对岸的树，

日日夜夜守望着，守望着岁月的苍茫，守望着彼此日渐苍老的容颜，

也时时刻刻盼望着，盼望着缘分再一次顾怜，盼望着千年等一回的相逢。
        </p>
        <Images/>  
    </div>
</template>

<script>
    import Images from '@/components/bbs/vanger/image.vue'
    export default {
        name:'main',
        components:{
            Images,
        }
    }
</script>

<style scoped>

.bg {
    width: 700px;
    padding: 10px 15px;
}

</style>