import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";

export const useLoginStore = defineStore("login", () => {
  const userStore = useUserStore();
  const loginName = ref("");
  const isLogin = computed(() => {
    //loginName is not empty
    return loginName.value !== "";
  });
  const login = (userName: string, password: string): void => {
    if (userStore.login(userName, password)) {
      loginName.value = userName;
      localStorage.setItem("loginName", userName);
    }
  };
  const logout = () => {
    loginName.value = "";
    localStorage.removeItem("loginName");
  };
  const loadData = () => {
    loginName.value = localStorage.getItem("loginName") || "";
  };

  return { loginName, isLogin, login, logout, loadData };
});
