<script setup lang="ts">
import { useUserStore } from "../../stores/user";
import { mdiDelete, mdiPencil } from "@mdi/js";
const userStore = useUserStore();
</script>

<template>
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
          <v-btn :icon="mdiPencil" color="secondary"></v-btn>
          <v-btn :icon="mdiDelete" color="error"></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
