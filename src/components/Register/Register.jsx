import { Link, useNavigate } from 'react-router-dom';
import registerIllustrator from '../../assets/register.svg';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Firebase/AuthProvider';
import { auth } from '../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';


const Register = () => {
  const {userAvailability, emailPassAuth, createUserWithGoogle} = useContext(AuthContext);
  const [getErr, setErr] = useState(null);
  const [eyeStatus, SetEyeStatus] = useState(true);
  const navigate = useNavigate();
  const verifyPass = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  if(userAvailability){
    navigate("/");
  }
  const registerHandler = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    setErr(null);
    if(!verifyPass.test(password)){
      setErr("Password must have at least 6 character, Uppercase Letter and Lowercase Letter.");
    }
    else{
      setErr(null);
      emailPassAuth(email, password, name, photo)
      .then(() => 
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo,
        }).then(() => {
          navigate("/");
          toast.success("Registration successful.");
        })
      ).catch(err => setErr(err.message))
    }
  }

  const googleAuthHandler = () => {
    createUserWithGoogle().then(() => {
      navigate("/");
      toast.success("Registration Successful!");
    })
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX | Registration</title>
      </Helmet>
      <div className="hero lg:bg-base-200 h-[90vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center hidden w-1/2 lg:block">
            <img src={registerIllustrator} />
          </div>
          <div className="card p-3.5 sm:p-10 lg:card-body bg-base-200 lg:bg-none lg:max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-center font-extrabold text-3xl pb-5'>Registration Now</h1>
            <form onSubmit={registerHandler} className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={eyeStatus ? "password" : "text"} name='password' placeholder="password" className="input input-bordered" required />
                <span onClick={() => SetEyeStatus(!eyeStatus)} className='absolute top-12 right-3'>{eyeStatus ? <FaRegEyeSlash className='text-xl' /> : <FaRegEye className='text-xl'/>
                }</span>
              </div>
              <div>
                <span className='text-red-600 pt-1'>{getErr ? getErr : " "}</span>
              </div>
              <div className="form-control mt-6 gap-4">
                <button className="btn btn-success font-bold">Register</button>
                <button onClick={googleAuthHandler} className="btn"><FcGoogle className='text-2xl'/> Register with Google</button>
              </div>

              <div className='mt-6'>
                <p className='font-medium text-md'>Already have an account <Link className="underline text-blue-800" to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
