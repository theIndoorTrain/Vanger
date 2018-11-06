<template>
    <div class="bg">
        <Source class="source"/> 
        <Source class="source"/> 
        <Source class="source"/> 
        <Source class="source"/>       
    </div>
</template>

<script>
    import Source from '@/components/source/source.vue';
    export default {
        name:'sourceList',
        components:{
            Source,
        }
    }
</script>

<style scoped>

.bg {
    background-image: url("../../assets/bg/bg2.jpg");
    background-repeat: repeat-y;
    width:558px;
}

.source {
}

</style>