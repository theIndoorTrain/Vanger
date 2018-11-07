<template>
    <div class="bg">
        <h1>热度排行榜</h1>
        <hr>
        <div v-for="index in 15">
            <a href=""><span>{{index}}.寻找失踪的绵羊</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'list',
    }
</script>

<style scoped>

.bg {
    width: 80%;
}

a {
    color: black;
    font-style:oblique;
    font-size: 20px;
    text-decoration: none;
}

</style>