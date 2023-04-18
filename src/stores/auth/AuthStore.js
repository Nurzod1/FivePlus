import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      name: 'Rakhim'
    },
    role: 'pupil',
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setRole(role) {
      this.role = role;
    },
  },
});