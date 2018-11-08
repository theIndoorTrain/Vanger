<template>
    <div>
        <Comment/>
        <div>
            <Reply/>
        </div>
    </div>
</template>

<script>
    import Comment from '@/components/comments/comment.vue';
    import Reply from '@/components/comments/reply.vue';
    export default {
        name:'comment',
        components: {
            Comment,
            Reply,
        }
    }
</script>

<style scoped>


</style>