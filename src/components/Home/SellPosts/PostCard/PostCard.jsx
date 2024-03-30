import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PostCard = ({ post }) => {
    const { _id, bookName, deadline, minimumPrice, description, image, category } = post;



    const [isHovered, setIsHovered] = useState(false);




    const handleMouseOver = () => {
        setIsHovered(true);
    }
    const handleMouseOut = () => {
        setIsHovered(false);
    }

    useEffect(() => {
        Aos.init({ duration: "600" })
    }, [])
    return (

        <div className={`${isHovered ? 'scale-105 transition-transform duration-300 ' : 'transition-transform duration-300 '}`} >
            <div className="card card-compact rounded-lg  shadow-xl"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="h-[150px] w-[130px] mx-auto md:h-[220px] lg:h-[240px] lg:w-[180px]">
                    <img src={image} className="object-cover   rounded-lg h-full w-full" alt="brand image" />
                </div>
                <div className=" card card-compact ">
                    <div className="card-body  text-left text-gray-800">
                      <div className="max-h-11 overflow-hidden">
                      <h2 className=" text-base md:text-base font-semibold ">{bookName}</h2>
                      </div>
                        <p className="text-md"><span className="text-md font-medium">Category:</span> {category}</p>
                        <div className="text-gray-800 ">
                            <p ><span className="text-md font-medium">Deadline:</span> {deadline}</p>
                        </div>

                        <p className="  text-md md:text-md font-bold ">Bid starts from :<span className=" text-base text-red-600 "> {minimumPrice}.00 ৳</span></p>
                        <div>
                            <Link to={`/post_details/${_id}`} className="btn btn-sm  w-full bg-orange-400 text-white font-semibold">Bid Now</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostCard;
