import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageStore = defineStore("message", () => {
  const isShow = ref(false);
  const massage = ref("");
  const showMessage = (msg: string) => {
    massage.value = msg;
    isShow.value = true;
  };
  const closeMessage = (msg: string) => {
    massage.value = msg;
    isShow.value = true;
  };

  return { isShow, massage, showMessage, closeMessage };
});
