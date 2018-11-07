<template>
    <div class="bg">
        <Source class="source"/>
    </div>
</template>

<script>
    import Source from '@/components/source/source.vue';
    export default {
        name:'source',
        components:{
            Source,
        }
    }
</script>

<style scoped>

.source {
    background-image: url("../../assets/bg/bg2.jpg");
    background-repeat: repeat-y;
    width: 800px;
}

.bg {
    padding-left: 10%;
}


</style>