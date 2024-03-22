import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginPong from "../../assets/images/login/login.png"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {

    const{loginUser}=useAuth();
    const navigate = useNavigate();

const handleLogin = e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    loginUser(email,password)
    .then(()=>{
        toast.success('logged in successfully');
        navigate('/');
    })
    .catch(error=>console.log(error))


}


    return (
        <div className="bg-gradient-to-r from-[#c0e1c9] to-[#e0f3e6]  p-12">
            <div className=" ">
                <div className="bg-[#e6feed]  w-full rounded-2xl flex  overflow-hidden">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <img className="w-3/4" src={loginPong} alt="logo" />
                        <div className="text-center mt-[-50px]">
                            <p className="text-2xl font-bold text-gray-400">Old Books Bazaar</p>
                            <p className="font-semibold text-gray-400">welcome to Books bazaar</p>
                        </div>
                    </div>
                    <div className="flex-1  bg-[#fafffb] py-12 ">
                       
                            <form onSubmit={handleLogin} className="card-body px-32 ">
                                <div className="form-control">
                                    <p className="text-xl mb-5 font-bold text-gray-400 text-center">Old Books Bazaar</p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn text-white bg-[#263238]">Login</button>
                                </div>
                                <div className="text-center space-y-2">
                                    <p>or</p>
                                    <div className="flex items-center justify-center gap-2"><FcGoogle className="text-2xl"/><Link>sign in with google</Link></div>
                                    <p>dont have an account <Link to={'/register'} className="text-sky-500 ml-2 underline">Register now</Link></p>
                                </div>
                            </form>
                 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;