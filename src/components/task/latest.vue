<template>
    <div class="bg">
        <div>
            <h2>最新任务：</h2>
            <div v-for="index in 10" class="task">
                <a href=""><span>{{index}}.寻找失落的绵羊------￥500.00------截至日期：2018-9-31</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'latest',
    }
</script>

<style scoped>

.bg {
    width:70%;
    background-image: url("../../assets/bg/bg3.jpg");
    color: antiquewhite;
    padding: 20px 100px;
}

h2 {
    font-size: 40px;
}

a {
    color: antiquewhite;
    font-style:oblique;
    font-size: 20px;
    text-decoration: none;
}

.task {
    margin: 10px 20px;
}

</style>