import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleuserOut = () =>{
    logOut()
    .then(result =>{
      const user = result.user;
    })
    .then(err => {err})
  }

  return (
    <div>
      <div className="navbar bg-white">
        <div className="flex-1">
           <Link to='/'> <h1 className="text-xl text-blue-300 font-bold">Doctor Appoint</h1></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-5 text-black  text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2 ">
                  <li>
                    <Link>Team Listing</Link>
                  </li>
                  <li>
                    <Link>Awards</Link>
                  </li>
                  <li>
                    <Link>Book Home Visit</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link to='/booking'>Booking</Link></li>
            {
              user?.email?<>
                <li><button onClick={handleuserOut}>Sign Out</button></li>
                </>:
                <>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
                </>
            }
            
            <li>
              <details>
                <summary>Blog</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <Link>Blog Listing</Link>
                  </li>
                  <li>
                    <Link>Single Blog</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
