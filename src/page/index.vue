<template>
    <div class="bg">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/App/header.vue'
    import Footer from '@/components/App/footer.vue'
    export default {
        name:'index',
        components:{
            Header,
            Footer,
        }
    }
</script>

<style scoped>

.bg {
    width:70%;
    margin: 0 auto;
}

</style>