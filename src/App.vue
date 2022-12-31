<script setup lang="ts">
import LoginView from "./views/LoginView.vue";
import MainView from "./views/MainView.vue";
import { onMounted } from "vue";
import { useLoginStore } from "@/stores/login";
import MassageBox from "./components/MassageBox.vue";
const loginStore = useLoginStore();
onMounted(() => {
  console.log("onMounteds ");
  loginStore.loadData();
});
</script>

<template>
  <LoginView v-if="!loginStore.isLogin" />
  <MainView
    v-if="loginStore.isLogin"
    @logout="loginStore.logout"
    :loginName="loginStore.loginName"
  />
  <MassageBox></MassageBox>
</template>

<style scoped></style>
