import { useLoaderData } from "react-router-dom";
import BidCard from "./BidCard/BidCard";

const MyBids = () => {
    const bids = useLoaderData(null);
console.log(bids);
    return (
      <div className="bg-gray-50">
          <div className=" w-1/2 mx-auto p-10 mb-20">
            <h2 className="mb-5 text-center font-bold text-xl ">YOUR BIDS</h2>
       
            <div>
                {
                    bids?.map(bid => <BidCard
                        key={bid._id}
                        bid={bid}
                    ></BidCard>)
                }
            </div>
        </div>
      </div>
    );
};

export default MyBids;