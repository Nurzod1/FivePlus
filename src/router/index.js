import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '../stores/auth/AuthStore';
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import Work from "../components/Work.vue";
import MyChilds from "../components/MyChilds.vue";
import History from '../components/History.vue'
import Support from '../components/Support.vue'
import Balance from '../components/Balance.vue'
import Role from '../components/Role.vue'
import Chat from '../components/Chat.vue'
import Settings from '../components/Settings.vue'
import Teacher from '../components/Teacher.vue'
import Register from '../components/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true,
        roles: ['parent', 'teacher', 'pupil'],
      },
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        const role = authStore.role;
        const requiredRoles = to.meta.roles;
  
        if (!authStore.user) {
          next({ path: '/login' });
        } else if (!requiredRoles || requiredRoles.includes(role)) {
          next();
        } else {
          next({ path: '/403' });
        }
      },
    },
    {
      path: "/work",
      name: "Work",
      component: Work,
      meta: {
        requiresAuth: true,
        roles: ['teacher'],
      },
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        const role = authStore.role;
        const requiredRoles = to.meta.roles;
  
        if (!authStore.user) {
          next({ path: '/login' });
        } else if (!requiredRoles || requiredRoles.includes(role)) {
          next();
        } else {
          next({ path: '/403' });
        }
      },
      
    },
    {
      path: "/mychilds",
      name: "MyChilds",
      component: MyChilds,
      meta: {
        requiresAuth: true,
        roles: ['parent'],
      },
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        const role = authStore.role;
        const requiredRoles = to.meta.roles;
  
        if (!authStore.user) {
          next({ path: '/login' });
        } else if (!requiredRoles || requiredRoles.includes(role)) {
          next();
        } else {
          next({ path: '/403' });
        }
      },
    },
    {
      path: "/history",
      name: "History",
      component: History,
      meta: {
        requiresAuth: true,
        roles: ['parent', 'pupil', 'teacher'],
      },
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        const role = authStore.role;
        const requiredRoles = to.meta.roles;
  
        if (!authStore.user) {
          next({ path: '/login' });
        } else if (!requiredRoles || requiredRoles.includes(role)) {
          next();
        } else {
          next({ path: '/403' });
        }
      },
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
    {
      path: "/teacher",
      name: "Teacher",
      component: Teacher,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
});

export default router;
