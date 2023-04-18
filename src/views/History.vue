<template>
    <body>
        <header>
            <header-container>
                <div class="menu-container">
                    <sidebar></sidebar>

                    <div class="balance">
                        <div class="balance-container">

                            <section class="history">
                                <div class="history-title">История занятий</div>
                                <div class="history-container">
                                    <div class="history-text">
                                        <div class="teacher">
                                            <img src="../assets/img/avatar.png" class="teacher-img" alt="">
                                            <div class="teacher-name">
                                                Teacher name
                                            </div>
                                        </div>
                                        <div class="subject-text">
                                            <div class="subject">Предмет: Математика</div>
                                            <div class="subject">Ученик: Саша</div>
                                        </div>

                                    </div>
                                    <div class="flex-for-btn">
                                        <button class="btn-hist" role="button">Подробнее</button>
                                    </div>
                                </div>
                                <div class="history-container">
                                    <div class="history-text">
                                        <div class="teacher">
                                            <img src="../assets/img/avatar.png" class="teacher-img" alt="">
                                            <div class="teacher-name">
                                                Teacher name
                                            </div>
                                        </div>
                                        <div class="subject-text">
                                            <div class="subject">Предмет: Математика</div>
                                            <div class="subject">Ученик: Саша</div>
                                        </div>

                                    </div>
                                    <div class="flex-for-btn">
                                        <button class="btn-hist" role="button">Подробнее</button>
                                    </div>
                                </div>
                                <div class="history-container">
                                    <div class="history-text">
                                        <div class="teacher">
                                            <img src="../assets/img/avatar.png" class="teacher-img" alt="">
                                            <div class="teacher-name">
                                                Teacher name
                                            </div>
                                        </div>
                                        <div class="subject-text">
                                            <div class="subject">Предмет: Математика</div>
                                            <div class="subject">Ученик: Саша</div>
                                        </div>

                                    </div>
                                    <div class="flex-for-btn">
                                        <button class="btn-hist" role="button">Подробнее</button>
                                    </div>
                                </div>
                            </section>
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

.history-title{
    font-size: 24px;
    font-weight: 700;
    color: #fff;
}

.flex-for-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pocket-title {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
}

.subject {
    color: #fff;
    margin-top: 15px;
    font-size: 20px;
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

.teacher-name {
    margin-left: 15px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
}

.teacher {
    display: flex;
    align-items: center;
}

.history {
    width: 60%;
    margin: auto;
}

.history-container {
    background-color: #47515ecc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    margin-top: 30px;
    padding: 30px;
}

.balance-container {
    margin: auto;
}

.pockets {
    display: flex;
    align-items: center;
    padding-top: 40px;
    margin: auto;
    flex-wrap: wrap;
}

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

.pocket {
    margin-top: 100px;
}

.pocket-block-price {
    color: #0267FF;
    font-size: 35px;
    margin-top: 25px;
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

    .history-container {
        flex-direction: column;
        text-align: center;
    }

    .work-container {
        margin-top: 40px;

    }

    .balance-inputs[data-v-ac034731] {

        width: 85%;
    }
    .history{
        width: 75%;
    }
}

@media(max-width:600px) {


    .pockets {
        justify-content: center;
    }

    .logo-img {
        width: 60px;
        height: 90px;
    }

    .w3-sidebar {
        padding: 20px;
    }

}


@media(max-width:400px) {}</style>
