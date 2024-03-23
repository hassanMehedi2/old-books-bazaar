import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaPhone, FaSearch, FaTwitter } from "react-icons/fa";


const Navbar = () => {
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState();
    const navigate = useNavigate();
    const links = <>
        <NavLink  to={'/'} className={({ isActive }) => isActive ? "text-orange-400 btn btn-ghost btn-sm" : "btn btn-ghost btn-sm" }>Home</NavLink>
        <NavLink  to={'/sell_books'} className={({ isActive }) => isActive ? "text-orange-400 btn btn-ghost btn-sm" : "btn btn-ghost btn-sm" }>Sell Book</NavLink>
        <NavLink  to={`/my_posts/${user?.email}`} className={({ isActive }) => isActive ? "text-orange-400 btn btn-ghost btn-sm" : "btn btn-ghost btn-sm" }>My Posts</NavLink>
        <NavLink  to={`/my_bids/${user?.email}`} className={({ isActive }) => isActive ? "text-orange-400 btn btn-ghost btn-sm" : "btn btn-ghost btn-sm" }>My Bids</NavLink>
        <NavLink  to={'/bids-requests'} className={({ isActive }) => isActive ? "text-orange-400 btn btn-ghost btn-sm" : "btn btn-ghost btn-sm" }>Bid Requests</NavLink>
    </>

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        console.log(searchQuery);
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("logged out");
                navigate('/login');
                console.log(user.displayName);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className=" pt-5 py-4 px-14 flex justify-between" >
                <div className="text-gray-800 font-bold text-sm  flex gap-10 ">
                    <p className="hover:text-orange-300">Sell a book</p>
                    <div className="flex gap-2 items-center hover:text-orange-300"><FaPhone FaPhone className="hover:text-orange-300 text-orange-300"></FaPhone>
                        <p className="hover:text-orange-300">+1840-8412569</p>
                    </div>
                </div>
                <div className="text-gray-800 font-bold text-base  flex gap-5">
                    <FaFacebook className="hover:text-orange-300"></FaFacebook>
                    <FaTwitter className="hover:text-orange-300"></FaTwitter>
                    <FaLinkedin className="hover:text-orange-300"></FaLinkedin>
                </div>
            </div>
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
                        <p className="text-2xl font-bold"><span className="text-3xl text-orange-400">O</span>ld Book Bazaar</p>
                        {/* <Link>
                        </Link> */}
                    </div>
                </div>

                {/* search  
                <div className="w-2/3   hidden lg:flex mr-10">

                    <form className="flex w-full" onSubmit={ handleSearch}>
                        <input className="w-full px-4 flex-1 text-white py-[10px] rounded-3xl border bg-gray-100 focus:outline-none focus:border-gray-900" type="text" placeholder="search ..." onChange={handleChange} />
                        <button type="submit" className=" text-gray-500 ml-[-50px] p-2 "><FaSearch></FaSearch></button>
                    </form>

                </div> */}
                <div className=" navbar-center">
                    <div className="  hidden lg:flex mr-10">
                        <ul className="menu menu-horizontal px-1 gap-6 text-md font-bold">
                            {links}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end ">

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