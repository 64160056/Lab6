<script setup lang="ts">
import { ref } from "vue";
import type { VForm } from "vuetify/components";
const loginName = ref("");
const password = ref("");
const valid = ref(true);
const form = ref<InstanceType<typeof VForm> | null>(null);
const login = async () => {
  const { valid } = await form.value!.validate();
  if (valid) {
    console.log("Form Succes");
  }
};
</script>

<template>
  <v-app>
    <v-main class="pa-16 bg-blue-grey-darken-2">
      <v-card width="400px" class="mx-auto">
        <v-card-title primary-title class="text-center"> Login </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Login Name"
              v-model="loginName"
              :rules="[
                (v) => !!v || 'Login Name is required',
                (v) =>
                  v.length >= 4 ||
                  'Name must be more than or equal 4 characters',
              ]"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="Password"
              v-model="password"
              :rules="[
                (v) => !!v || 'Password is required',
                (v) =>
                  v.length >= 8 ||
                  'Password must be more than or equal 8 characters',
              ]"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="success" @click="login"> Login </v-btn>
          <v-btn color="error"> Clear </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>
