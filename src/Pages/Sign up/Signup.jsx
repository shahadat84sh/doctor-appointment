import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(err => console.log(err))
        form.reset()
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <form onSubmit={handleSignup}>
            
          <div className="card-body">
          <h1 className='text-3xl text-primary text-center'>Sign Up Here with Email and Password</h1>

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
            <input  className="btn btn-primary" type="submit" value="Sign Up" />
            <p className="text-md">Already have an Account? <Link to='/login' className="text-primary">Log in here</Link></p>
          </div>
          
          </form>
        </div>
      </div>
  );
};

export default Signup;