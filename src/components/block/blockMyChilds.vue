<template>
    <div class="work-card">
        <div class="card-container">

            <div class="card-inner">
                <div class="child-photo">
                    <img src="@/assets/img/childphoto.jpg" alt="">
                </div>
                <div class="card-title">Иван Баранов</div>

                <div class="card-subject">
                    <div class="card-subject-title">Класс:</div>
                    <div class="card-subject-text">7 класс</div>
                </div>
                <div class="card-class">
                    <div class="card-subject-title">Номер телефона:</div>
                    <div class="card-subject-text">+7 (997) 344 54 43</div>
                </div>
            </div>

            <div class="work-btns">
                <a href="#" class="accept">Редактировать</a>
                <a href="#" class="decline">Удалить ребенка</a>
            </div>
        </div>


    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>.work-card {
    margin-right: 40px;
    margin-top: 30px;
}

.work-title {
    font-size: 36px;
    color: #cfcbcb;
    font-weight: 700;
}
.child-photo img {
    width: 100%;
    max-height: 405px;
}

.cards {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-container {
    width: 400px;
    margin: auto;
    background-color: rgb(24, 23, 28);
    border: 1px solid grey;
}

.card-inner {
    padding: 25px
}

.card-title {
    font-size: 27px;
    font-weight: 700;
    margin-top: 15px;
    color: rgb(171, 170, 175);
}

.card-quest {
    font-size: 16px;
    font-weight: 500;
    color: rgb(171, 170, 175);
    margin-top: 25px;
    line-height: 25px;
}





.card-subject-title {
    color: rgb(171, 170, 175);

    font-size: 20px;
    font-weight: 700;
    margin-top: 25px;
}

.card-subject-text {
    color: rgb(171, 170, 175);

    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
}

.work-btns {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(39, 37, 40);
    padding: 30px;
}

.accept {
    color: rgb(126, 170, 189);
    font-weight: 400;
    margin-right: 45px;
    font-size: 18px;
    transition: .2s linear;
}

.accept:hover {
    color: aquamarine;
}

.decline {
    color: rgb(149, 98, 108);
    font-weight: 400;
    transition: .2s linear;
    font-size: 20px;
}


.decline:hover {
    color: rgb(180, 31, 31);
}




@media(max-width:900px) {


    .ready {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .add-child img {
        margin-right: 0;

    }

    .menu-container {
        justify-content: center;
        margin: auto;
        margin-left: 100px;
    }

    .nav-link span {
        display: none;
    }

    .nav-link {
        margin-left: 25px;
    }

    .profile-img {
        width: 150px;
        height: 150px;
    }

    .logo-img {
        margin-left: 0;
        width: 80px;
        height: 120px;

    }

    .nav {
        align-items: center;

    }

    .w3-sidebar {
        background-color: rgb(24, 23, 28);
        padding-right: 15px;
    }

    .work-container {
        margin-top: 40px;

    }
}

@media(max-width:600px) {
    .inputs {
        width: 65%;
    }

    .enter {
        width: 45%;
        font-size: 12px;
    }

    .login-input {
        font-size: 14px;
    }

    .logo-img {
        margin-left: 8px;
        width: 60px;
        height: 90px;
    }

    .work-title {
        font-size: 20px;
    }

    .card-container {
        width: 300px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-quest {
        font-size: 12px;
    }

    .card-subject-title {
        font-size: 16px;
    }

    .card-subject-text {
        font-size: 16px;
    }

    .accept {
        font-size: 16px;
    }

    .decline {
        font-size: 16px;
    }

    .cards {
        justify-content: center;
    }
}


@media(max-width:400px) {


    .work-title {
        font-size: 16px;
    }

    .card-container {
        width: 260px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-quest {
        font-size: 12px;
    }

    .card-subject-title {
        font-size: 16px;
    }

    .card-subject-text {
        font-size: 16px;
    }}</style>