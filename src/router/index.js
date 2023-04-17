import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Work from "../views/Work.vue";
import MyChilds from "../views/MyChilds.vue";
import History from '../views/History.vue'
import Support from '../views/Support.vue'
import Balance from '../views/Balance.vue'
import Role from '../views/Role.vue'
import Chat from '../views/Chat.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/work",
      name: "Work",
      component: Work,
    },
    {
      path: "/mychilds",
      name: "MyChilds",
      component: MyChilds,
    },
 
    {
      path: "/history",
      name: "History",
      component: History,
    },
    {
      path: "/support",
      name: "Support",
      component: Support,
    },
    {
      path: "/balance",
      name: "Balance",
      component: Balance,
    },
    {
      path: "/role",
      name: "Role",
      component: Role,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
    },
    {
      path: "/settings",
      name: "Setting",
      component: Settings,
    },
  ],
});

export default router;
