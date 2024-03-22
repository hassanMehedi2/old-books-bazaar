
import { useLoaderData } from 'react-router-dom';
import BidForm from './BidForm/BidForm';

const PostDetails = () => {
    const post = useLoaderData({});
    const {_id,bookName,deadline,startingPrice,shortDescription}= post;
    return (
        <div>
        <h2 className='text-xl font-bold'>{bookName}</h2>
        <BidForm post={post}></BidForm>
    </div>
    );
};

export default PostDetails;