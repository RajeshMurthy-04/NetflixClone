import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AVATAR, LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    <div
      className={`fixed top-0 left-0 w-full px-8 py-3 z-30 flex items-center justify-between ${location.pathname === "/browse" ? "bg-black bg-opacity-60" : "bg-gradient-to-b from-black"}`}
    >
      <img className="w-36 md:w-40" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user?.photoURL || AVATAR}
            alt="profile"
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
