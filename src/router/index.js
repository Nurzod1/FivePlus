import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '../stores/auth/AuthStore';
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
      path: "/",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true,
        roles: ['parent', 'teacher', 'pupil', 'admin'],
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
        roles: ['teacher', 'admin'],
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
        roles: ['parent', 'admin'],
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
        roles: ['parent', 'pupil', 'teacher', 'admin'],
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
  ],
});

export default router;
