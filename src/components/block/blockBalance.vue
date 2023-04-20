<template>
    <div class="pocket-block">
        <div class="pocket-block-title">Для начинающих</div>
        <div class="pocket-block-minuts">{{ minuts }}</div>
        <div class="pocket-block-price">{{ price }} руб</div>
        <BuyBtn>Купить</BuyBtn>
</div>
</template>
<script>
import BuyBtn from '@/components/Buttons/BuyBtn.vue'
export default {
    data() {
        return {
            minuts: 123,
            price: 123,
        }
    },
    components:{
        BuyBtn
    }
};
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

/* CSS */
.balance-title {
    font-size: 24px;
    color: #fff;
    font-weight: 700;

}

.balance-inputs {
    margin-top: 30px;
    display: flex;
    width: 25%;
    flex-direction: column;
}

.minuts {
    padding: 10px;
    border: none;
    text-align: center;
    color: #000;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 16px;
}




.btn-hist {
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    height: 48px;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    margin-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    align-self: flex-end;
    position: relative;
    text-decoration: none;
    transition: box-shadow .15s, transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
}



.btn-hist:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.btn-hist:hover {
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
}

.btn-hist:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
}



.menu-container {
    display: flex;
}



.w3-sidebar {
    background-color: rgb(24, 23, 28);
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    width: 15%;
    padding: 25px;
    height: 100vh;
}


router-link a {
    text-decoration: none !important;
}


@media (max-width:2560px) {}

@media (max-width:1500px) {}

@media (max-width:1200px) {

}


@media(max-width:900px) {

 

   
}

@media(max-width:600px) {


 
 


}


</style>
