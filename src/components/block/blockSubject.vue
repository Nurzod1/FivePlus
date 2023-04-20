<template>
    <div class="pocket-block-price"> <slot></slot> <img class="pen-img" src="@/assets/img/pencil.png" alt=""></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pocket-block-price {
    color: #3d3939;
    font-size: 35px;
    margin-top: 25px;
    background-color: #e6dcdc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px;
    font-weight: 700;
    justify-content: center;
}
.pen-img {
    width: 25px;
    height: 25px;
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 15px;
}
</style>