import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBiddedCard = ({ topPostId }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/sell_posts?id=${topPostId}`)
            .then(data => {
                setPost(data.data[0])
                console.log(data.data);
            })
            .catch(err => console.log(err))
    }, [topPostId])


    // Destructure image property from post only if post is not null
    const { _id,image, bookName,category ,deadline, minimumPrice} = post || {};

    return (
        <div className="h-full  overflow-hidden">
            {
                post &&
                <Link to={`/post_details/${_id}`} className="flex  gap-4 ">

                    <div className=" w-[130px]">
                        <img src={image} className="h-[180px] w-[130px] object-cover rounded-xl" alt="product image" />
                    </div>

                    <div className="flex-1  flex items-center ">
                        <div className="px-2 space-y-[6px]">
                        <p className="text-base font-bold">{bookName}</p>
                        <p className="text-sm text-[#999999]">{category}</p>
                        <p className="text-base font-medium">Starts From <span className="text-orange-600 font-semibold">{minimumPrice}.00</span></p>
                        <Link to={`/post_details/${_id}`} className="btn  btn-sm  bg-orange-400 text-white ">Bid Now</Link>
                       
                        </div>
                    </div>

                </Link>
            }
        </div>
    );
};

export default TopBiddedCard;