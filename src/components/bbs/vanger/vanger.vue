<template>
    <div class="bg">
        <Title/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
    import Title from '@/components/bbs/vanger/title.vue'
    import Main from '@/components/bbs/vanger/main.vue'
    import Footer from '@/components/bbs/vanger/footer.vue'
    export default {
        name:'vanger',
        components:{
            Title,
            Main,
            Footer,
        }
    }
</script>

<style scoped>

.bg {
}

</style>