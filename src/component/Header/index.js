import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("userDetails");

  const logoutUser = () => {
    localStorage.removeItem("userDetails");
    navigate("/signin");
  };
  return (
    <div className="flex p-2 w-full bg-red-600  justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
        alt="logo"
        className="h-14"
      />
      {auth ? (
        <button
          className="bg-black text-white 
        rounded-md px-3 h-10 cursor-pointer"
          type="button"
          onClick={logoutUser}
        >
          Logout
        </button>
      ) : (
        <div>
          <Link to="/signin"><button
            className="bg-black text-white 
        rounded-md px-3 h-10 cursor-pointer"
            type="button"
          >
            SignIn
          </button>{" "}</Link>
         <Link to="/signup">
         <button
            className="bg-black text-white 
        rounded-md px-3 h-10 cursor-pointer"
            type="button"
          >
            SignUp
          </button>
         </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
