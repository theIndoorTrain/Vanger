<template>
    <div class="bg">
        <Header/>
        <router-view class="xm-a"/>
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
    width:100%;
    margin: 0 auto;
    background: #EAEAEA;
}

.xm-a{
    width: 70%;
    margin: 0 auto;
    border-left-style: solid;
    border-left-width: 1px;
    border-right-style: solid;
    border-right-width: 1px;
    background: #fff;
}

</style>