<template>
    <div class="login">
        <div class="login-container">
            <router-link to="/">
                <div class="logo"><img src="../assets/img/logo.png" class="logo-img" alt=""></div>
            </router-link>
            <div class="login-title">Авторизация</div>
            <div class="inputs">
                <input type="email" v-model.trim="email" placeholder="Введите логин" class="login-input">
                <input type="password" v-model.trim="password" placeholder="Введите пароль" class="login-input">
            </div>
            <button class="enter">Продолжить</button>
            <router-link to="/register">
                <div href="#" class="have-account">Еще нету аккаунта?</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.login {
    background: rgb(17, 15, 22);
    height: 100vh;
    margin: auto;
    position: relative;
}



.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}


.login-title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
}

.inputs {
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
}

.login-input {
    margin-top: 23px;
    padding: 10px 1px;
    border-radius: 10px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    background-color: rgb(36, 34, 40);
    width: 90%;
    transition: width 0.3s ease-in;
    color: #fff;
}

.login-input[type=email]:focus {
    width: 100%;

}



.login-input[type=password]:focus {
    width: 100%;
}

.login-input[type=email] {
    font-weight: 700;
}

.login-input[type=password] {
    font-weight: 700;
}



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

router-link a {
    text-decoration: none !important;
}


.enter:hover {
    background-color: rgb(36, 34, 40);
}

.have-account {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: rgb(111, 186, 154);
    text-decoration: none;

    margin-top: 30px;
    transition: .1s linear;
}

.have-account:hover {
    color: #b2b8bd;
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

@media(max-width:900px) {
    .inputs {
        width: 45%;
    }

    .enter {
        width: 35%;
    }
}

@media(max-width:600px) {
    .inputs {
        width: 65%;
    }

    .enter {
        width: 45%;
    }
}
</style>

