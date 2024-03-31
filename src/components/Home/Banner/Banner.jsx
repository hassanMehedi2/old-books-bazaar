
import { FaAngleRight } from "react-icons/fa6";
const Banner = () => {
    return (

        <div className="h-[95vh] w-full overflow-hidden">
            <div className="h-full bg-[#223d4d] relative border bordered flex" style={{
                backgroundImage: 'https://i.ibb.co/pWmvDrg/revslider-h7-shape.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // equivalent to object-fit: cover
                overflow: 'hidden'
            }}>

               
                <div className="flex  flex-1 flex-col justify-center items-center hero-content  ">

                    <div className="">
                        <p className="text-base text-white font-semibold mb-4">Lets Bid </p>
                        <h1 className="text-5xl text-white font-bold ">Sell Your Books Now <br />Through Bidding</h1>
                        <p className="text-gray-100 font-semibold mt-5 text-lg">Seamless buying and selling experience <br />Grab your books now .</p>
                        <button className="bordered  btn bg-gray-100 rounded-full px-5 mt-8">Explore Now <FaAngleRight></FaAngleRight></button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src="https://i.ibb.co/sj4Trr6/revslider-book-5.png" alt="" />
                    </div>
            </div>

        </div>

    );

};

export default Banner;