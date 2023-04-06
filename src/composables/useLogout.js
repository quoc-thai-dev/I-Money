import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signOut } from "firebase/auth";
const error = ref(null);
const isPending = ref(false);

async function logout() {
  isPending.value = true;
  error.value = null;
  await signOut(projectAuth)
    .then(() => {
      console.log("Logout success");
    })
    .finally(() => {
      isPending.value = false;
    });
}
export function useLogout() {
  return { error, isPending, logout };
}
