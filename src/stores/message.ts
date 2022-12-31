import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageStore = defineStore("message", () => {
  const isShow = ref(false);
  const massage = ref("");
  const timeout = ref(2000);
  const showMessage = (msg: string, tout: number = 2000) => {
    massage.value = msg;
    isShow.value = true;
    timeout.value = tout;
  };
  const closeMessage = () => {
    massage.value = "";
    isShow.value = false;
  };

  return { isShow, massage, showMessage, closeMessage, timeout };
});
