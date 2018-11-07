<template>
    <div>
        <Search/>
        <Tables/>
        最热资源：
        <Tables/>
        最新资源：
        <Tables/>
    </div>
</template>

<script>
    import Search from '@/components/search/search.vue';
    import Tables from '@/components/source/table.vue';
    export default {
        name:'source',
        components:{
            Search,
            Tables,
        }
    }
</script>

<style scoped>


</style>