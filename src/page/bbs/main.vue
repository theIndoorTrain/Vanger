<template>
    <div class="bg">
        <Header/>
        
        <Vanger class="vanger"/>

        <Vanger class="vanger"/>
    </div>
</template>

<script>
    import Header from '@/components/bbs/header.vue'
    import Vanger from '@/components/bbs/vanger/vanger.vue'
    export default {
        name:'bbs_main',
        components:{
            Header,
            Vanger,
        }
    }
</script>

<style scoped>

.bg{
    
}


.vanger {
    margin: 20px auto;
    width: 730px;
    border: 1px solid;
}


</style>