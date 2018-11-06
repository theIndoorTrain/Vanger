<template>
    <div class="bg">
         <img src="@/assets/logo.png" class="logo">
         <div class="userInfo">
             <a href=""><span>零度微笑</span></a>
             <div class="time">
                 <span>10-5</span>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name:'title',
    }
</script>

<style scoped>

.bg {
    position: relative;
    width: 700px;
    background: #D0D0D0;
    padding: 10px 15px;
}

.logo {
    height: 50px;
    width:50px;
    border-radius: 50%;
    border: 2px;
    border-style:solid;
    border-color: bisque;
}

.userInfo {
    position: absolute;
    top: 15px;
    left: 80px;
    color: #FFF;
}

.time {
    margin-top: 5px;
}

</style>