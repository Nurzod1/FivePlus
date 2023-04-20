<template>
        <button class="enter"><slot></slot></button>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.enter {
    align-items: center;
    padding: 0px 24px;
    background: inherit;
    border-radius: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #FFFFFF;
    border: #E1D4D4 solid 1px;
    margin-top: 37px;
    width: 20%;
    padding: 10px 1px;
    transition: 0.2s linear;
    cursor: pointer;
}



.enter:hover {
    background-color: rgb(36, 34, 40);
}
</style>