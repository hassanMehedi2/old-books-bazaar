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
                <div className="h-[150px] w-[130px] mx-auto md:h-[220px] lg:h-[250px] lg:w-[200px]">
                    <img src={image} className="object-cover   rounded-lg h-full w-full" alt="brand image" />
                </div>
                <div className=" card card-compact ">
                    <div className="card-body  text-left">
                        <h2 className=" text-base md:text-lg font-bold">{bookName}</h2>
                        <p className="text-md"><span className="text-md font-semibold">Category:</span> {category}</p>
                        <div className="text-gray-500  h-[40px] md:h-[40px] lg:h-[60px] overflow-hidden">
                            <p ><span className="text-nd font-semibold">Deadline:</span> {deadline}</p>
                            <p>{description.slice(0, 60)} <span className="text-blue-800 text-justify">read more ..</span></p>
                        </div>

                        <p className=" mt-1 text-md md:text-md font-bold ">Bid starts from :<span className=" text-base text-red-600 "> {minimumPrice}.00 ৳</span></p>
                        <div>
                            <Link to={`/post_details/${_id}`} className="btn   w-full bg-orange-400 text-white font-semibold">Bid Now</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostCard;
