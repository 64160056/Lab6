<script setup lang="ts">
import { useUserStore } from "../../stores/user";
import { mdiDelete, mdiPencil, mdiPlus } from "@mdi/js";
import type { User } from "@/type/User";
const userStore = useUserStore();

const deleteUser = (index: number): void => {
  userStore.deleteUser(index);
};
const addNewUser = () => {
  userStore.dialog = true;
};
const editUser = (user: User) => {
  userStore.editUser(user);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="item of userStore.users" :key="item.id">
        <v-card>
          <v-card-title> {{ item.id }} {{ item.login }} </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
