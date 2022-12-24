import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const loginName = ref("");
  const isLogin = computed(() => {
    //loginName is not empty
    return loginName.value !== "";
  });
  const login = (userName: string): void => {
    loginName.value = userName;
    localStorage.setItem("loginName", userName);
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
