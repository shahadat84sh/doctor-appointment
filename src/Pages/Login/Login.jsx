import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
const {login} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
console.log(location);

const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .then(err => console.log(err))
        form.reset()
        navigate(from, {replace:true})
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <form onSubmit={handleLogin}>
          <div className="card-body">
          <h2 className="text-3xl text-purple-400 text-center">Login with Email Password</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <input  className="btn btn-primary" type="submit" value="Login" />
            <p className="text-md">Don't have an Account? <Link to='/register' className="text-primary">Register first</Link></p>
          </div>
          
          </form>
        </div>
      </div>
  );
};

export default Login;
