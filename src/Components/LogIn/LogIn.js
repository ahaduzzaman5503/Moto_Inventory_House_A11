import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useForm } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';

const LogIn = () => {
      const [signInWithGoogle, userForGoogle, googleLoading, errorForGoogle] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [signInWithEmailAndPassword, emailPasswordUser, emailPasswordLoading, emailPasswordError] = useSignInWithEmailAndPassword(auth);

      let errorForSingIn;
          const location = useLocation();
          const navigate = useNavigate();
      let from = location.state?.from?.pathname || "";

      useEffect(() =>{
        if (userForGoogle || emailPasswordUser) {
          console.log(userForGoogle || emailPasswordUser) 
          navigate(from, {replace: true});
        }
      },[userForGoogle, emailPasswordUser, from, navigate ]);

        if(emailPasswordLoading || googleLoading){
          return <button className="btn btn-success text-xl loading container mx-auto flex justify-center items-center w-48 mt-40">loading</button>
        }

        if(errorForGoogle || emailPasswordError){
          errorForSingIn = <p className='text-red-500'>{errorForGoogle?.message || emailPasswordError?.message} </p>
        }

          const onSubmit = data => {
          console.log(data);
          signInWithEmailAndPassword(data.email, data.password);
          }

          const passwordResetHandler = () => {
            sendPasswordResetEmail(auth)
            .then(() =>{
              console.log('email sent')
            });
          };

    return (
        <div className='flex justify-center items-center h-screen container mx-auto'>
          <div className="card w-1/2	 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-body">
                  <h1 className="text-4xl text-center my-5 font-bold"> Login Now!</h1>
                 <form onSubmit={handleSubmit(onSubmit)}>
                       
                        {/* Email Feild Start */}
                 <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                      </label>
                      <input type="email" placeholder="email" 
                      className="input input-bordered " 
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Requard"
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a valid Email',
                        }
                      })}
                      />
                      <label className='label'>
                          {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                          {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                      </label>
                    </div>
                    {/* Email Feild End */}


                    {/* Password Feild Start */}
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="password" 
                        className="input input-bordered " 
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Requard"
                          },
                          minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer',
                          }
                        })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </label>                      
                    </div>

                    {/* Password Feild End */}
                      {errorForSingIn}
                      <button type='submit' value="Sign Up"  className="btn btn-info w-full">Log In</button>
                 </form>
                 <button onClick={passwordResetHandler} className="btn btn-outline btn-info">Forget Password? 
                 <a className=" pl-5 link link-primary"> Click to reset</a></button>


                 <div className=' container text-center mt-3'>
                      <span className='text-xl mr-1'>New to Motodeal?</span>
                      <Link to="/regester" className="link link-hover text-success text-xl">Create new account</Link>
                 </div>

                   
                          {/* Divider Start */}  

                    <div className='flex justify-center items-center space-x-4 py-4'>
                      <div className='w-40 h-1 bg-gray-200 rounded ' ></div>
                      <div><span></span></div>
                      <div className='w-40 h-1 bg-pink-200 rounded ' ></div>
                    </div>

                          {/* Divider End */}

                    <div className="form-control mt-6">
                      <button 
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button>
                    </div>
              </div>
            </div>
          </div>
        </div>

        
    );
};

export default LogIn;