<template>
    <div>
        <div>
            <Task class="task"/>
        </div>
        <div>
            分页控件
        </div>
    </div>
</template>

<script>
    import Task from '@/components/task/task.vue';
    export default {
        name:'task',
        components:{
            Task,
        }
    }
</script>

<style scoped>

.task {
    margin: 20px auto;
}

</style>