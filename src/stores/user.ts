import type { User } from "@/type/User";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const lastId = 3;
  const user = ref<User[]>([
    { id: 1, login: "admin", name: "Administrator", password: "Pass@1234" },
    { id: 2, login: "user1", name: "User1", password: "Pass@1234" },
  ]);
  return { user };
});
