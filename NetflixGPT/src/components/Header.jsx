import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex ">
        <img
          className="w-12 h-12 rounded-full"
          src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABSzy9530jJFbbKWQfAUZRqF4M4T6NyPo6YRGIlEKTYGTIOzvZLRo6omzgQQ1XSZ2t-TfR6qPWfVVG96BN2fCTPUHRUGyQXw5if7C.png?r=723"
          alt="profile"
        />
        <button className="text-white font-bold" onClick={handleSignOut}>
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
