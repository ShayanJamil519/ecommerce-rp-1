import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {Firebase} from "../FirebaseConfig"; // Import your Firebase initialization correctly

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const signOutUser = async () => {
    try {
      await signOut(getAuth(Firebase));
      // No "clear()" function, so you can remove this line
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(Firebase), provider);
      console.log("===: ", result.user.email);
      if (result?.user?.email) {
        localStorage.setItem("email", result?.user?.email);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(Firebase), provider);
      console.log(result);
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        // Handle the case where the user closed the Facebook sign-in popup
        console.log("Facebook sign-in popup was closed by the user.");
      } else {
        // Handle other authentication errors
        console.error("Error signing in with Facebook:", error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(Firebase), authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signOutUser,
    signInWithGoogle,
    signInWithFacebook,
  };
}
