<template>
    <div class="w3-sidebar w3-bar-block">
        <div class="nav">
            <router-link to="/">
                <div class="logo-flex">
                    <img src="@/assets/img/logo.png" class="logo-img" alt="">
                </div>
            </router-link>
            <router-link to="/" class="nav-link"><img src="@/assets/img/profileimg.png" alt=""><span>Профиль</span></router-link>
            <router-link to="/mychilds" class="nav-link"><img src="@/assets/img/motherandchild.png" alt=""><span>Мои
                    дети</span></router-link>
            <router-link to="/balance" class="nav-link"><img src="@/assets/img/wallet.png" alt=""><span>Баланс</span></router-link>
            <router-link to="/history" class="nav-link"><img src="@/assets/img/time.png" alt=""><span>История
                    </span></router-link>
            <router-link to="/support" class="nav-link"><img src="@/assets/img/support.png" alt=""><span>Поддержка</span></router-link>
            <router-link to="#" class="nav-link"><img src="@/assets/img/exit.png" alt=""><span>Выйти</span></router-link>
            <router-link to="/teacher" class="nav-link"><img src="@/assets/img/teacher.png" alt=""><span>Стать учителем
                    </span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            role: "pupil"
        }
    }
}
</script>

<style scoped>

.nav {
    display: flex;
    flex-direction: column;
}


.nav-link {
    color: #e2e2e2;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    white-space: nowrap;
    line-height: 36px;
    margin-top: 20px;
}


.nav-link span {
    margin-left: 15px;
}

.nav-link:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 2%;
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
}

.nav-link:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.nav-link img:after {
    background-color: #f66d52;
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    -webkit-transition: width .3s ease-in-out;
    -moz--transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
}

.nav-link img:hover:after,
.nav-link img:focus:after {
    width: 100%;
}

.nav-link img {
    width: 30px;
    height: 30px;
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

@media (max-width:1500px) {
    .nav-link{
        font-size: 18px;
    }
   
}

@media (max-width:1200px) {
    .nav-link span {
        display: none;
    }




    .nav {
        align-items: center;

    }

    .w3-sidebar {
        background-color: rgb(24, 23, 28);
    }

}


@media(max-width:900px) {

    .teach {
        display: none;
    }


    

  

}

@media(max-width:600px) {



    .logo-img {
        width: 60px;
        height: 90px;
    }

    .w3-sidebar {
        padding: 20px;
    }


}
</style>