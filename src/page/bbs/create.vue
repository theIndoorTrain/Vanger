<template>
    <div>
        <Title/>
        <Editor/>
    </div>
</template>

<script>
import Editor from '@/components/bbs/editor.vue';
import Title from '@/components/bbs/title.vue';
    export default {
        name:'bbs_create',
        components:{
            Editor,
            Title
        }
    }
</script>

<style scoped>


</style>