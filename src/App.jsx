import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";

const App = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName || "Guest",
            photoURL: photoURL,
          }),
        );
        navigate("/browse", { replace: true });
      } else {
        dispatch(removeUser());
        navigate("/", { replace: true });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
