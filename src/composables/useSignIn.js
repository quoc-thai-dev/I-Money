import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;

  await signInWithEmailAndPassword(projectAuth, email, password)
    .then((userCredential) => {
      // Sign In
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      error.value = err.message;
    })
    .finally(() => {
      isPending.value = false;
    });
}

export function useSignIn() {
  return { error, isPending, signin };
}
