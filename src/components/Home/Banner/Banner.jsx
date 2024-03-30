
import { FaAngleRight } from "react-icons/fa6";
const Banner = () => {
    return (

        <div className="h-[95vh] w-full overflow-hidden">
            <div className="h-full relative  border bordered flex" style={{ backgroundImage: 'url(https://i.ibb.co/L1HP6DD/aaron-burden-cm-Iqk-MPfp-MQ-unsplash-1.jpg)',objectFit:'cover' ,overflow:'hidden'}}>
            <div className="hero-overlay absolute bg-opacity-30"></div>
               <div className="w-1/2">
                
               </div>
               <div className="flex  flex-1 flex-col justify-center items-center hero-content  ">
                
                    <div className="text-center">
                    <h1 className="text-5xl text-white font-bold ">Sell Your Books Now <br />Through Bidding</h1>
                    <p className="text-gray-100 mt-5">Seamless buying and selling experience</p>
                    <button className="bordered  btn bg-gray-100 rounded-full px-5 mt-8">Explore Now <FaAngleRight></FaAngleRight></button>
                    </div>
                </div>
            </div>

        </div>

    );
 
};

export default Banner;