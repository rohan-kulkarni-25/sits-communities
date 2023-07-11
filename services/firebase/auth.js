import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);

const logUserIn = async (
  email = "rohank2502@gmail.com",
  password = "rohan@25"
) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    alert(error);
  }
};

export { logUserIn };
