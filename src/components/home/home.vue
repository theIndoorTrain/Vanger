<template>
    <div class="bg">
        <div class="logo">
            <img src="@/assets/car/1.jpg" width="300px" height="300px" >
            <div>
                <span>零度微笑</span>
            </div>
        </div>
        <div class="love">
            <img src="@/assets/bg/love.png" width="250px">
        </div>
        <div class="loved">
            <img src="@/assets/bg/loved.png" width="250px">
        </div>
    </div>
</template>

<script>
    export default {
        name:'home',
    }
</script>

<style scoped>

.bg {
    background-image: url("../../assets/bg/home.jpg");
    background-size: cover;
    width: 100%;
    height:100%;
    overflow: hidden;
    box-shadow:0 0 120px 80px rgba(255,255,255,.3) inset;
    position: absolute;
}

.logo {
    position: absolute;
    bottom: 5%;
    right: 8%;
}

.logo img {
    border: 5px solid whitesmoke;
}

.logo div {
    text-align: center;
}

span {
    font-size: 30px;
    color: beige;
}

.love {
    position: absolute;
    top: 10px;
    right: 10px;
}

.loved {
    position: absolute;
    bottom: 2%;
    right: -2%;
}

</style>