<template>
    <div class="bg"> 
        <img src="@/assets/car/2.jpg" width="480px" height="640px">
        <div class="card">
            <h1>格列佛游记.epub</h1>
            <p>
                《格列佛游记》是英国作家乔纳森·斯威夫特（又译为江奈生·斯威夫特）创作的一部长篇游记体讽刺小说，首次出版于1726年。
作品以里梅尔·格列佛（又译为莱缪尔·格列佛）船长的口气叙述周游四国的经历。通过格列佛在利立浦特、布罗卜丁奈格、飞岛国、慧骃国的奇遇，反映
了18世纪前半期英国统治阶级的腐败和罪恶。 
            </p>
            <div>
                <label >价格：</label><span>55.01</span>
            </div>
            <div>
                <label >下载：</label><span>5501</span>
            </div>
        </div>
        <hr>
        <h2>评论：</h2>
        <Comments/>
    </div>
</template>

<script>
    import Comments from '@/components/comments/comments.vue';
    export default {
        name:'card',
        components:{
            Comments,
        }
    }
</script>

<style scoped>

.bg {
    width:800px;
    margin: 0 auto;
    position: relative;
}

.card {
    position: absolute;
    left: 500px;
    top:50%;
    transform: translateY(-50%)
}

</style>