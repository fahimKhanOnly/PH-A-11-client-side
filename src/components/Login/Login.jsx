import { Link, useNavigate } from 'react-router-dom';
import loginIllustrator from '../../assets/login.svg';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Firebase/AuthProvider';


const Login = () => {
  const {loginWithEmail, createUserWithGoogle, userAvailability} = useContext(AuthContext);
  const navigate = useNavigate();
  const [eyeStatus, SetEyeStatus] = useState(true);
  const [err, setErr] = useState(null);
  // const {googleAuth, loginWithEmail, userStatus} = useContext(AuthContext);

  if(userAvailability){
    navigate("/");
  }
  const googleLoginHandler = () => {
    createUserWithGoogle().then(() => {
      navigate("/");
      toast.success("Login Successful!");
    })
  }

  const loginHandler = e => {
    setErr(null);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmail(email, password).then(() => {
      navigate("/");
      toast.success("Login Successful!");
    }).catch(err => setErr(err.message));
  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | Login</title>
      </Helmet>
      <div className="hero lg:bg-base-200 h-[90vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center hidden w-1/2 lg:block">
            <img src={loginIllustrator} />
          </div>
          <div className="card p-3.5 sm:p-10 lg:card-body bg-base-200 lg:bg-none lg:max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-center font-extrabold text-3xl pb-5'>Login Now</h1>
            <form onSubmit={loginHandler} className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={eyeStatus ? "password" : "text"} name='password' placeholder="password" className="input input-bordered" required />
                <span onClick={() => SetEyeStatus(!eyeStatus)} className='absolute top-12 right-3'>{eyeStatus ? <FaRegEyeSlash className='text-xl' /> : <FaRegEye className='text-xl'/>
                }</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div>
                <span className='text-red-600 pt-1'>{err ? err : " "}</span>
              </div>
              <div className="form-control mt-6 gap-4">
                <button className="btn btn-success">Login</button>
                <button onClick={googleLoginHandler} className="btn"><FcGoogle className='text-2xl' /> Login with Google</button>
              </div>
              <div className='mt-6'>
                <p className='font-medium text-md'>Don't have an account <Link className="underline text-blue-800" to="/register">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
