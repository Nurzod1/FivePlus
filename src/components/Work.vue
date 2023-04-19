<template>
    <body>
        <header>
            <header-container>
                <div class="menu-container">
                    <sidebar></sidebar>
                    <div class="work">
                        <div class="work-container">
                            <div class="work-title">Работа</div>
                            <div class="cards">
                                <div class="work-card">
                                    <div class="card-container">
                                        <div class="card-inner">
                                            <div class="card-title">Иван Баранов</div>
                                            <div class="card-quest">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Repellat amet perferendis Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit.
                                                Repellat amet perferendis voluptatibus quam facilis modi! voluptatibus quam
                                                facilis modi!</div>
                                                <div class="card-classes">

                                                    <div class="card-subject">
                                                <div class="card-subject-title">Предмет:</div>
                                                <div class="card-subject-text">{{ subject }}</div>
                                            </div>
                                            <div class="card-class">
                                                <div class="card-subject-title">Класс:</div>
                                                <div class="card-subject-text">{{ clasess }}</div>
                                            </div>
                                                </div>

                                        </div>

                                        <div class="work-btns">
                                            <a href="#" class="accept">Принять</a>
                                            <a href="#" class="decline">Отклонить</a>
                                        </div>
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
            clasess:9,
            subject:'Математика',
            userName: 'Вася Пупкин',
        }
    }
}
</script>
<style scoped>
body {
    background-color: rgb(17, 15, 22);
    background-size: 100% !important;
}


.ready {
    margin-top: 30px;
    display: flex;
    align-items: center;
}

.green img {
    width: 25px;
    height: 25px;
    margin-right: 10px;

}

.green {
    display: flex;
    align-items: center;
    color: rgb(116, 173, 158);
    font-weight: 700;
    padding: 5px 7px;
    background-color: rgb(23, 51, 46);
    border-radius: 20px;
    text-align: center;
    width: 13%;
    height: 40px;
    animation-name: greenanim;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    justify-content: center;

}

@keyframes greenanim {
    0% {
        background-color: rgb(44, 111, 93)
    }

    25% {
        background-color: rgb(52, 52, 52);
    }

    50% {
        background-color: rgb(44, 111, 93)
    }

    75% {
        background-color: rgb(52, 52, 52);
    }

    100% {
        background-color: rgb(44, 111, 93)
    }

}

.brown {
    margin-left: 30px;
    background-color: rgb(52, 52, 52);
    border-radius: 20px;
    text-align: center;
    width: 10%;
    height: 40px;
    display: flex;
    align-items: center;
    color: rgb(202, 202, 202);
    font-weight: 700;
    padding: 5px 7px;
    justify-content: center;
}

.brown img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.menu-container {
    display: flex;
    margin-left: 290px;
    padding: 0px 10px;
    justify-content: center;
}



.w3-sidebar {
    background-color: rgb(24, 23, 28);
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    width: 20%;
}

.work {
    width: 95%;
    margin-left: 35px;
}

.work-container {
    margin-top: 90px;

}

.work-card {
    margin-top: 30px;
    margin-left: 30px;
}

.work-title {
    font-size: 36px;
    color: #cfcbcb;
    font-weight: 700;
    text-align: center;
}

router-link a {
    text-decoration: none !important;
}

.card-classes{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
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
    font-weight: 700;
    font-size: 20px;
    margin-right: 45px;
    transition: .2s linear;
}

.accept:hover {
    color: aquamarine;
}

.decline {
    color: rgb(149, 98, 108);
    font-weight: 700;
    transition: .2s linear;
    font-size: 20px;
}


.decline:hover {
    color: rgb(180, 31, 31);
}

@media (max-width:2560px) {
    .inputs {
        width: 25%;
    }
}

@media (max-width:1500px) {
    .inputs {
        width: 35%;
    }

}

@media (max-width:1200px) {
    .inputs {
        width: 35%;
    }


}


@media(max-width:900px) {
    .inputs {
        width: 45%;
    }

    .enter {
        width: 35%;
    }
    .menu-container {
        justify-content: center;
        margin: auto;
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
        font-size: 25px;
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
        font-size: 20px;
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
    }
}</style>
