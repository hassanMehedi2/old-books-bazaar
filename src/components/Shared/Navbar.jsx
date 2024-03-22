import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user,logout } = useAuth();
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/sell_books'}>Sell Book</NavLink></li>
        <li><NavLink to={`/my_posts/${user?.email}`}>My Posts</NavLink></li>
        <li><NavLink to={`/my_bids/${user?.email}`}>My Bids</NavLink></li>
        <li><NavLink to={'/bids-requests'}>Bid Requests</NavLink></li>
    </>
    const handleLogout = ()=>{
        logout()
        .then(()=>{
            toast.success("logged out");
            navigate('/login');
            console.log(user.displayName);
        })
        .catch(error=>console.log(error))
    } 

    return (
        <div>
            <div className="navbar bg-base-100  py-5">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link><img className="w-[250px] object-cover " src="https://i.ibb.co/F521PCc/logogg.png" alt="Old Book Bazaar" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">{user.displayName ? user.displayName : "user"}</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><button onClick={handleLogout}>LogOut</button></li>
                            </ul>
                        </div>

                        : <Link to={'/login'} className="btn ">Login</Link>
               }
                </div>
            </div>
        </div>
    );
};

export default Navbar;