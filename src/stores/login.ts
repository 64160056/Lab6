import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { useMessageStore } from "./message";
export const useLoginStore = defineStore("login", () => {
  const userStore = useUserStore();
  const messageStore = useMessageStore();
  const loginName = ref("");
  const isLogin = computed(() => {
    //loginName is not empty
    return loginName.value !== "";
  });
  const login = (userName: string, password: string): void => {
    if (userStore.login(userName, password)) {
      loginName.value = userName;
      localStorage.setItem("loginName", userName);
    } else {
      messageStore.showMessage("Login หรือ Password ไม่ถูกต้อง");
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
