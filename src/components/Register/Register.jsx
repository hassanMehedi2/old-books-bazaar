import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast';

import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";

const Register = () => {

    const [visible, setVisible] = useState(false);
    const { updateUser ,createUser} = useAuth();
    const navigate = useNavigate();

    const handleCreateUser = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {name,photo,email,password};

        // validate the password
        if (password.length < 6) {
            toast.error('Password must be at lest 6 character !');

            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must have one Capital letter at lest!');
            return
        }
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            toast.error('Password must have one special character at lest!');
            return;
        }

        createUser(email,password)
        .then(res=>{
            console.log(res.user);
            navigate('/');
            toast.success('Registered successfully')

            // updateUser data 
            updateUser(name,photo)
            .then(res=>console.log(res.user))
            .catch(error=>console.log(error))
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGoogleLogin = e=>{
        e.preventDefault();
    }
    return (
        <div>
             <div className="bg-gradient-to-r from-[#e6feed] to-[#e0f3e6]  p-2">
            <div className=" ">
                <div >
                    
                    <div className="flex mt-0 md:mt-5 mx-auto card shrink-0 w-full max-w-lg px-10 shadow-2xl bg-base-100">
                       
                    <form onSubmit={handleCreateUser} className="card-body">
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold mt-5 mb-3 text-center">Please Register</h2>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={visible ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input w-full input-bordered" required />
                            <button onClick={() => setVisible(!visible)} className="absolute text-lg right-4 top-4">
                                {
                                    visible ? <FaEye></FaEye> :<FaEyeSlash ></FaEyeSlash> 
                                }
                            </button>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {/* social media  */}
                    <div className=' '>
                        <div className="flex  p-2 justify-center items-center">
                            <Link onClick={handleGoogleLogin} className="flex gap-3 justify-center items-center"><FcGoogle className="text-center text-xl " /> <p className="font-semibold text-sm md:text-base text-green-600">Continue with Google</p></Link>
                        </div>
                        <div className="flex  p-2 mt-4 mb-4 justify-center items-center">
                            <Link onClick={() => { }} className="flex gap-3 justify-center items-center"><FaGithub className="text-center text-xl" /> <p className="font-semibold text-sm md:text-base text-green-600">Continue with Github</p></Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <p>Allready have an account ? <Link to={'/login'} className="text-blue-600">Login</Link></p>
                    </div>

                </form>
                 
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Register;