import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/Firebase.Init";
import Swal from "sweetalert2";

/* -------------------------------------------------------------------------- */
/*                           IMPORTING FROM FIREBASE                          */
/* -------------------------------------------------------------------------- */
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  /* -------------------------------------------------------------------------- */
  /*                                ALL PROVIDER                                */
  /* -------------------------------------------------------------------------- */
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  /* -------------------------------------------------------------------------- */
  /*                              UPDATE USER INFO                              */
  /* -------------------------------------------------------------------------- */
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                             CREATE NEW ACCOUNT                             */
  /* -------------------------------------------------------------------------- */
  const createNewAccount = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserInfo(name);
        const newUser = result.user;
        setUser(newUser);
        setError("");
        Swal.fire({
          icon: "success",
          title: "Great! Your account has been succesfully created.. ",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setError(error.message);
      });

    setLoading(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                             SIGN IN WITH EMAIL                             */
  /* -------------------------------------------------------------------------- */
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* -------------------------------------------------------------------------- */
  /*                           SIGN IN WITH ANY SOCIAL                          */
  /* -------------------------------------------------------------------------- */

  const signInWithSocialAccount = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------------------------------------------------- */
  /*                               RESET PASSWORD                               */
  /* -------------------------------------------------------------------------- */
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
        Swal.fire({
          icon: "success",
          title: "Please Check Your Email ",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setError(error.message);
      });
  };
  /* -------------------------------------------------------------------------- */
  /*                                 USER LOGOUT                                */
  /* -------------------------------------------------------------------------- */
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setError("");
        Swal.fire({
          icon: "success",
          title: "You are successfully logged out..",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                               ON AUTH CHANGE                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    setUser,
    error,
    loading,
    createNewAccount,
    resetPassword,
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithSocialAccount,
    logOut,
  };
};

export default useFirebase;
