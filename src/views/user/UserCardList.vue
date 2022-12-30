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
      <v-col>
        <v-card>
          <v-btn height="150px" width="100%" class="text-h3" @click="addNewUser"
            >+</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" v-for="item of userStore.users" :key="item.id">
        <v-card height="150px">
          <v-card-title> {{ item.id }} {{ item.login }} </v-card-title>
          <v-card-text>{{ item.name }} {{ item.password }}</v-card-text>
          <v-card-actions>
            <v-btn color="error" @click="deleteUser"> Delete </v-btn>

            <v-btn color="secondary" @click="editUser"> Edit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
