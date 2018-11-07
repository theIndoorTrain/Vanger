<template>
    <div class="bg">
        <Latest class="latest"/>
        <table class="table">
            <tr>
                <td>
                    <List class="list"/>
                </td>
                <td>
                    <List class="list"/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Latest from '@/components/task/latest.vue';
    import List from '@/components/task/list.vue';
    export default {
        name:'task',
        components:{
            Latest,
            List,
        }
    }
</script>

<style scoped>

.latest {
    margin: 0px auto;
}

.bg {
    
}

.table {
    width: 70%;
    margin: 0 auto;
}


</style>