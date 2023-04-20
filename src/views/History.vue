<template>
    <body>
        <LandHistory></LandHistory>
       
    </body>
</template>
<script>
import LandHistory from '@/components/land/LandHistory.vue'
import blockHistory from '@/components/block/blockHistory.vue'
export default {
    data() {
        return {
            teacherName:'Александр Александров'
        }
    },
    components:{
        blockHistory,LandHistory
    }
}
</script>
<style scoped>
body {
    background: rgb(17, 15, 22);
    height: 100vh;
}

</style>
