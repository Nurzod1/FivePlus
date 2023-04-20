<template>
  <sidebar></sidebar>
  <div class="main-container">
    <section class="body">
      <div class="menu-container">
        <div class="work">
          <div class="ready">
            <div class="work-title">Мои дети</div>
            <button class="add-child">
              <img src="@/assets/img/plus.png" alt="" /><span
                >Добавить ребенка</span
              >
            </button>
          </div>
          <div class="work-container">
            <div class="cards">
              <BlockMyChilds></BlockMyChilds>
              <BlockMyChilds></BlockMyChilds>
              <BlockMyChilds></BlockMyChilds>
              <BlockMyChilds></BlockMyChilds>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BlockMyChilds from "@/components/block/blockMyChilds.vue";
export default {
  data() {
    return {};
  },
  components: {
    BlockMyChilds,
  },
};
</script>
<style scoped>
.main-container {
  min-width: 100%;
  margin: auto;
  padding-top: 50px;
}

.ready {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
}

.work-title {
  margin-right: 40px;
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
    background-color: rgb(44, 111, 93);
  }

  25% {
    background-color: rgb(52, 52, 52);
  }

  50% {
    background-color: rgb(44, 111, 93);
  }

  75% {
    background-color: rgb(52, 52, 52);
  }

  100% {
    background-color: rgb(44, 111, 93);
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
}

.add-child {
  padding: 7px 30px;
  display: flex;
  align-items: center;
  color: rgb(116, 173, 158);
  justify-content: center;
  font-weight: 400;
  background-color: rgb(23, 51, 46);
  height: 40px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: 0.2s linear;
}

.child-photo img {
  width: 100%;
  max-height: 405px;
}

.add-child:hover {
  background-color: rgb(48, 87, 76);
}

.add-child img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.nav-link img:after {
  background-color: #f66d52;
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  -webkit-transition: width 0.3s ease-in-out;
  -moz--transition: width 0.3s ease-in-out;
  transition: width 0.3s ease-in-out;
}

.nav-link img:hover:after,
.nav-link img:focus:after {
  width: 100%;
}

.nav-link img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
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
  margin-right: 40px;
  margin-top: 30px;
}

.work-title {
  font-size: 36px;
  color: #cfcbcb;
  font-weight: 700;
}

router-link a {
  text-decoration: none !important;
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
  padding: 25px;
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
  transition: 0.2s linear;
}

.accept:hover {
  color: aquamarine;
}

.decline {
  color: rgb(149, 98, 108);
  font-weight: 400;
  transition: 0.2s linear;
  font-size: 20px;
}

.decline:hover {
  color: rgb(180, 31, 31);
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
  .add-child span {
    display: none;
  }

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

@media (max-width: 400px) {
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
  }
}
</style>
