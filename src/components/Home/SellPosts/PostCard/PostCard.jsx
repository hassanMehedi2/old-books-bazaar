import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PostCard = ({ post }) => {
    const { _id, bookName, deadline, minimumPrice, description, image,category } = post;



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
                <div className="h-[160px]  md:h-[220px] lg:h-[250px]">
                    <img src={image} className="object-contain  h-full w-full" alt="brand image" />
                </div>
                <div className=" card card-compact ">
                    <div className="card-body  text-left">
                        <h2 className=" text-base md:text-lg font-bold">{bookName}</h2>
                        <p className="text-md"><span className="text-md font-semibold">Category:</span> {category}</p>
                        <div className="text-gray-500  h-[40px] md:h-[60px] lg:h-[80px] overflow-hidden">
                            <p ><span className="text-nd font-semibold">Deadline:</span> {deadline}</p>
                            <p>{description.slice(0, 100)} <span className="text-blue-800 text-justify">read more ..</span></p>
                        </div>

                        <p className=" mt-1 text-md md:text-md font-bold ">Bids starts from :<span className=" text-base text-red-600 "> {minimumPrice}.00 ৳</span></p>

                    </div>





                </div>

            </div>
        </div>
    );
};

export default PostCard;
