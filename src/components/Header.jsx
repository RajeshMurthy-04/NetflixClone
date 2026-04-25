import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AVATAR, LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src={
              user?.photoURL || AVATAR
            }
            alt="profile"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
