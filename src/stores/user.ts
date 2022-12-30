import type { User } from "@/type/User";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const lastId = 4;
  const users = ref<User[]>([
    { id: 1, login: "admin", name: "Administrator", password: "Pass@1234" },
    { id: 2, login: "user1", name: "User1", password: "Pass@1234" },
    { id: 3, login: "user2", name: "User2", password: "Pass@1234" },
  ]);
  return { users };
});
