<template>
    <div>
        <div>
            <vanger class="vanger"/>
            <vanger class="vanger"/>
        </div>
        <div>
            分页控件
        </div>
    </div>
</template>

<script>
    import Vanger from '@/components/bbs/vanger/vanger.vue'
    export default {
        name:'bbs',
        components:{
            Vanger,
        }
    }
</script>

<style scoped>

.vanger {
    margin: 20px auto;
    width: 730px;
    border: 1px solid;
}

</style>