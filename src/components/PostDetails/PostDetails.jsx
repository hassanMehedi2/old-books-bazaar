
import { useLoaderData } from 'react-router-dom';
import BidForm from './BidForm/BidForm';

const PostDetails = () => {
    const [post] = useLoaderData({});
    const { _id, bookName, category, deadline, minimumPrice, description ,image } = post;
    console.log(image);
    return (
        <div className=''>
            <div className='w-3/4 mx-auto my-7 grid grid-cols-4 gap-7'>
                <div className='grid h-72 '>
                    <img className='w-full h-full object-cover' src={image} alt="product photo" />
                </div>
                <div className='col-span-3 space-y-3 mt-4'>
                    <h2 className='text-3xl font-bold '>{bookName}</h2>
                    <p ><span className="text-lg font-semibold">Deadline :</span> {deadline}</p>
                    <p ><span className="text-lg font-semibold">Category :</span> {category}</p>
                    <p className=" mt-1 text-md md:text-lg font-bold ">Bids starts from :<span className=" text-xl text-red-600 "> {minimumPrice}.00 ৳</span></p>
                       
                    <p className='mr-10 text-gray-600  text-justify'>{description}</p>
                </div>
            </div>
          <div className='bg-[#132749] p-10'>
          <BidForm post={post}></BidForm>
          </div>
        </div>
    );
};

export default PostDetails;