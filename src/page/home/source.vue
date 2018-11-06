<template>
    <div>
        <div>
            资源列表
            <SourceList/>
        </div>
        <div>
            分页控件
        </div>
    </div>
</template>

<script>
    import SourceList from '@/components/source/sourceList.vue';
    export default {
        name:'source',
        components:{
            SourceList,
        }
    }
</script>

<style scoped>

</style>