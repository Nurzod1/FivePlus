<template>
    <body>
        <header>
            <header-container>
                <div class="menu-container">
                    <sidebar></sidebar>
                    <div class="support">
                        <div class="support-container">
                            <div class="support-flex">
                                <div class="support-input"> <input type="text" class="problem-inp" placeholder="Проблема">
                                </div>
                                <div class="support-input"><textarea type="submit" class="problem-inp-detail"
                                        placeholder="Подробное описание проблемы"></textarea></div>
                                <div class="btn-center">
                                    <GradientBtn>Отправить</GradientBtn>
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
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        GradientBtn
    }
}
</script>
<style scoped>
body {
    background: rgb(17, 15, 22);
    height: 100vh;
}


.support {
    width: 30%;
    margin: auto;
    margin-top: 10%;
}

.support-flex {
    display: flex;
    flex-direction: column;
}

.support-input {
    color: #fff;
    text-align: center;
}

.teach {
    padding-top: 70%;
}

.btn-center {
    display: flex;
    justify-content: center;
}

.problem-inp {
    width: 60%;
    padding: 10px;
    border: none;
    text-align: center;
    color: #000;
    font-size: 16px;
}

.problem-inp-detail {
    width: 80%;
    padding: 10px;
    border: none;
    text-align: center;
    color: #000;
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
    display: inline-flex;
    height: 48px;
    width: 30%;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    margin-top: 30px;
    text-align: left;
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
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
}




router-link a {
    text-decoration: none !important;
}


@media (max-width:2560px) {}

@media (max-width:1500px) {}

@media (max-width:1200px) {}


@media(max-width:900px) {



    .teach {
        display: none;
    }



    .work-container {
        margin-top: 40px;

    }
}

@media(max-width:600px) {


    .menu-container {
        margin-left: 80px;
    }

    .logo-img {
        margin-left: 8px;
        width: 60px;
        height: 90px;
    }


}


@media(max-width:400px) {}
</style>
