import { Link } from "react-router-dom";


const PostCard = ({post}) => {
    const {_id,bookName,deadline,startingPrice,shortDescription}= post;
    return (
        <div className="bg-gray-300">
            <h2 className="text-xl font-bold">Book Name : {bookName}</h2>
            <h2>{deadline}</h2>
            <h2>{startingPrice}</h2>
            <h2>{shortDescription?.slice(20)}</h2>
            <Link className="btn btn-primary" to={`/post_details/${_id}`}>Bit Now</Link>
        </div>
    );
};

export default PostCard;
