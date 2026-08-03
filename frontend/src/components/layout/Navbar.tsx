import {
  Link,
  useNavigate,
} from "react-router-dom";

import useAuth from "../../hooks/auth/useAuth";


export default function Navbar(){

  const navigate =
    useNavigate();


  const {
    user,
    isAuthenticated,
    logout,

  } = useAuth();



  const handleLogout = () => {

    logout();

    navigate("/login");

  };



  return (

    <header>

      <nav>


        <Link to="/">
          Fortune Funding
        </Link>



        {
          isAuthenticated ? (

            <>

              <Link to="/dashboard">
                Dashboard
              </Link>



              {
                user?.role === "admin" && (

                  <Link to="/admin">
                    Admin
                  </Link>

                )
              }



              <button
                onClick={handleLogout}
              >
                Logout
              </button>


            </>


          ) : (

            <>

              <Link to="/login">
                Login
              </Link>


              <Link to="/register">
                Register
              </Link>


            </>


          )

        }


      </nav>

    </header>

  );

}