import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
const user = ref(projectAuth.currentUser);

onAuthStateChanged(projectAuth, (us) => {
  if (us) {
    user.value = us;
  }
});

function getuser() {
  return { user };
}
export function useUser() {
  return { getuser };
}
