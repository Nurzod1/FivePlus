<template>
  <header>
    <header-container>
      <div class="menu-container">
        <sidebar></sidebar>
        <div class="login">
          <div class="login-container">
            <div class="profile-img">
              <img
                src="@/assets/img/profileimg.png"
                class="profile-img"
                alt=""
              />
            </div>
            <div class="login-title">{{ userName }}</div>
            <div class="inputs">
              <div class="email-text">Email</div>
              <form-input></form-input>
              <div class="email-text">Номер телефона</div>
              <form-input></form-input>
            </div>
            <SaveBtn>Сохранить</SaveBtn>
          </div>
        </div>
      </div>
    </header-container>
  </header>
</template>
<script>
import SaveBtn from "@/components/Buttons/SaveBtn.vue";
import FormInput from "@/components/form/Forminput.vue";
export default {
  data() {
    return {
      userName: "Вася пупкин",
      email: "",
      phone: "",
    };
  },
  components: {
    FormInput,
    SaveBtn,
  },
};
</script>
<style scoped>
body {
  background: rgb(17, 15, 22);
  height: 100vh;
}

.login {
  background: rgb(17, 15, 22);
  margin: auto;
  width: 70%;
  padding-top: 100px;
}

.menu-container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
}

.login-title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #fff;
  margin-top: 20px;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  margin-top: 15px;
}

.w3-sidebar {
  background-color: rgb(24, 23, 28);
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  width: 20%;
}

.login-input {
  margin-top: 15px;
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

.login-input[type="email"]:focus {
  width: 100%;
}

.login-input[type="tel"]:focus {
  width: 100%;
}

.login-input[type="email"] {
  font-weight: 700;
}

.login-input[type="tel"] {
  font-weight: 700;
}

.profile-img {
  border-radius: 50%;
  width: 220px;
  height: 220px;
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
  color: #ffffff;
  border: #e1d4d4 solid 1px;
  margin-top: 37px;
  width: 20%;
  padding: 10px 1px;
  transition: 0.2s linear;
  cursor: pointer;
}

router-link a {
  text-decoration: none !important;
}

.email-text {
  color: #e2e2e2;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
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
  transition: 0.1s linear;
}

.have-account:hover {
  color: #b2b8bd;
}

@media (max-width: 2560px) {
  .inputs {
    width: 25%;
  }
}

@media (max-width: 1500px) {
  .inputs {
    width: 35%;
  }
}

@media (max-width: 1200px) {
  .inputs {
    width: 35%;
  }
}

@media (max-width: 900px) {
  .inputs {
    width: 45%;
  }

  .enter {
    width: 35%;
  }

  .menu-container {
    margin-left: 180px;
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

@media (max-width: 600px) {
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

  .menu-container {
    margin-left: 80px;
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

@media (max-width: 400px) {
  .menu-container {
    margin-left: 60px;
  }

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
}
</style>
