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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
