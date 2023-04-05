import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  await createUserWithEmailAndPassword(projectAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user, {
        displayName: fullname,
      }).then(() => {
        console.log(user);
      });
    })
    .catch((er) => {
      error.value = er.message;
    })
    .finally(() => {
      isPending.value = false;
    });
}

export function useSignUp() {
  return { error, isPending, signup };
}
