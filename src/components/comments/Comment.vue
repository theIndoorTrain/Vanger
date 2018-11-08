<template>
    <div class="bg">
        <img src="@/assets/logo.png" class="logo">
        <div class="userInfo">
             <a href=""><span>零度微笑</span></a><span> : hahah</span>
             <div class="time">
                 <span>10-5</span>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'comment'
    }
</script>

<style scoped>

.logo {
    height: 35px;
    width:35px;
    border-radius: 50%;
    border: 1px;
    border-style:solid;
    border-color: bisque;
}

.bg {
    position: relative;
}

.userInfo {

    position: absolute;
    top: 0px;
    left:40px;

}

.userInfo a{
    
}

</style>