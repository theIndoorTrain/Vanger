<template>
    <div>
        <Search/>
        <Tables/>
        <Tables/>
        <Tables/>
    </div>
</template>

<script>
    import Search from '@/components/search/search.vue';
    import Tables from '@/components/source/table.vue';
    export default {
        name:'main',
        components:{
            Search,
            Tables,
        }
    }
</script>

<style scoped>


</style>