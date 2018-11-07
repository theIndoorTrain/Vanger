<template>
    <div>
        <div class="source">
            <img src="@/assets/car/2.jpg" class="image">
            <div class="text">
                <span>即墨</span>
            </div>
        </div>
        <div class="source">
            <img src="@/assets/car/2.jpg" class="image">
            <div class="text">
                <span>即墨</span>
            </div>
        </div>
        <div class="source">
            <img src="@/assets/car/2.jpg" class="image">
            <div class="text">
                <span>即墨</span>
            </div>
        </div>
        <div class="source">
            <img src="@/assets/car/2.jpg" class="image">
            <div class="text">
                <span>即墨</span>
            </div>
        </div>
        <div class="source">
            <img src="@/assets/car/2.jpg" class="image">
            <div class="text">
                <span>即墨</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'source',
    }
</script>

<style scoped>


.source {
    float: left;
    margin:70px 20px 111px 65px;
    position: relative;
}

.image {
    width:150px;
    height:200px;
}

.text {
    width: 150px;
    text-align: center;
    position: absolute;
    bottom: 20px;
}

</style>