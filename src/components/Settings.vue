<template>
    <body>
        <header>
            <header-container>
                <div class="menu-container">
                    <sidebar></sidebar>
                    <div class="balance">
                        <div class="balance-container">
                            <div class="pocket">
                            <div class="pockets">
                                <div class="pocket-block">
                                    <div class="pocket-block-title">Предметы: <img src="../assets/img/blueplus.png" class="plus-img" alt=""></div>
                                    <div class="pocket-block-price">Математика <img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">Физика<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">Математика<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">Физика<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    
                                </div>
                                <div class="pocket-block">
                                    <div class="pocket-block-title">Классы: <img src="../assets/img/blueplus.png" class="plus-img" alt=""></div>
                                    <div class="pocket-block-price">1 класс <img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">2 класс<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">3 класс<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    <div class="pocket-block-price">4 класс<img class="pen-img" src="../assets/img/pencil.png" alt=""></div>
                                    
                                </div>
                                <div class="pocket-block">
                                   <div class="pocket-block-title">Стоимость минуты:</div>
                                   <div class="support-input"> <input type="text" class="problem-inp" placeholder="7"></div>

                                </div>
                            
                            </div>
                        </div>
                        </div>
                     
                    </div>


                </div>

            </header-container>

        </header>

    </body>
</template>
<script>
export default {
    data() {
        return {
          
        }
    }
}
</script>
<style scoped>
body {
    background: rgb(17, 15, 22);
    height: 100vh;
}


.pen-img{
    width: 25px;
    height: 25px;
    position: absolute;
    cursor: pointer;
    top:15px;
    right: 15px;

}

.flex-for-btn{
    display: flex;
    align-items: center;
    justify-content: center;
}

.plus-img{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    margin: 15px;
    right: 0;
}

.pocket-title {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
}

.problem-inp{
    width:60%;
    padding: 10px;
    border: none;
    text-align: center;
    color: #000;
    margin-top: 20px;
    background-color: #e6dcdc;
    font-size: 28px;
    font-weight: 700;
}

 

.pocket {
    width: 95%;
    margin: auto;
}

.balance {
    padding-top: 100px;
    width: 85%;
    margin-left: 50px;
}

.balance-container {
    margin: auto;
}

.pockets {
    display: flex;
    padding-top: 40px;
    margin: auto;
    flex-wrap: wrap;
}

.pocket-block {
    text-align: center;
    background: #171D33;
    border-radius: 24.15px;
    position: relative;
    width: 400px;
    padding: 35px;
    margin-right: 35px;
    margin-top: 25px;
}


.pocket-block-title {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    display: flex;
    align-items:center;
   
    justify-content: center;
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

.pocket {
    margin-top: 100px;
}

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

/* CSS */
.buy-btn {
    appearance: button;
    backface-visibility: hidden;
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    outline: none;
    margin-top: 25px;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s, box-shadow .08s linear;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
}

.buy-btn:hover {
    background-color: #6981b6;
}

.teach {
    padding-top: 70%;
}

.buy-btn:disabled {
    cursor: default;
}

.buy-btn:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

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

router-link a {
    text-decoration: none !important;
}


@media (max-width:2560px) {}

@media (max-width:1500px) {}

@media (max-width:1200px) {
    .nav-link span {
        display: none;
    }




    .nav {
        align-items: center;

    }

    .w3-sidebar {
        background-color: rgb(24, 23, 28);
        padding-right: 15px;
    }

}


@media(max-width:900px) {

    .teach {
        display: none;
    }

 
    .work-container {
        margin-top: 40px;

    }
    .balance-inputs[data-v-ac034731] {
   
    width: 85%;
}
.balance{
    padding-top: 0;
}
}

@media(max-width:600px) {


    .pockets{
        justify-content: center;
    }

    .logo-img {
        width: 60px;
        height: 90px;
    }
    .w3-sidebar{
        padding: 20px;
    }
    .pocket-block-price{
        font-size: 20px;
    }
.pen-img{
    top: 9px;
}

}


@media(max-width:400px) {}
</style>
