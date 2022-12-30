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
      <v-col cols="3" offset="9">
        <v-btn color="primary" :prepend-icon="mdiPlus" @click="addNewUser">
          Add New
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of userStore.users" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.login }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.password }}</td>
              <td>
                <v-btn
                  :icon="mdiPencil"
                  color="secondary"
                  @click="editUser(item)"
                ></v-btn>
                <v-btn
                  :icon="mdiDelete"
                  color="error"
                  @click="deleteUser(item.id)"
                ></v-btn>
              </td>
            </tr>
          </tbody> </v-table
      ></v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
