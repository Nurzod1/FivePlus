<template>
    <div class="history-container">
        <div class="history-text">
            <div class="teacher">
                <img src="@/assets/img/avatar.png" class="teacher-img" alt="">
                <div class="teacher-name">
                    Александр
                </div>
            </div>
            <div class="subject-text">
                <div class="subject">Предмет: Математика</div>
                <div class="subject">Ученик: Саша</div>
            </div>
        </div>
        <div class="flex-for-btn">
            <GradientBtn>Подробнее</GradientBtn>
        </div>
    </div>
</template>

<script>
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
export default {
components:{
    GradientBtn
}
}
</script>

<style scoped>
.flex-for-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}


.subject {
    color: #fff;
    margin-top: 15px;
    font-size: 20px;
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


.history-container {
    background-color: #47515ecc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    margin-top: 30px;
    padding: 30px;
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

    .history {
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


@media(max-width:400px) {}
</style>