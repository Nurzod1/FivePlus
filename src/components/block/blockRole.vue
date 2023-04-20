<template>
    <div class="pocket-block">
        <div class="pocket-block-title">Иван Дмитриевич</div>
        <div class="pocket-block-minuts">Предметы преподавания:</div>
        <div class="pocket-block-price">Математика, Физика</div>
        <div class="pocket-block-minuts">Классы преподавания:</div>
        <div class="pocket-block-price">6, 7, 10</div>
        <BuyBtn>Ознакомиться</BuyBtn>
    </div>
</template>

<script>
import BuyBtn from '@/components/Buttons/BuyBtn.vue'
export default {
    components: {
        BuyBtn
    }
}
</script>

<style scoped>
.pocket-block {
    text-align: center;
    background: #171D33;
    border-radius: 24.15px;
    padding: 35px;
    margin-right: 35px;
    margin-top: 25px;
}


.pocket-block-title {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    color: #FFFFFF;
}

.pocket-block-minuts {
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 25px;
    margin-top: 25px;
    color: #FFFFFF;
}


.pocket-block-price {
    color: #0267FF;
    font-size: 35px;
    margin-top: 25px;
}
</style>