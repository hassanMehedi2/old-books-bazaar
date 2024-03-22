import { useLoaderData } from "react-router-dom";
import BidCard from "./BidCard/BidCard";

const MyBids = () => {
    const bids = useLoaderData(null);

    return (
        <div className="w-2/3 mx-auto p-10">
            <h2 className="mb-5 text-center font-bold text-xl ">your bids</h2>
       
            <div>
                {
                    bids?.map(bid => <BidCard
                        key={bid._id}
                        bid={bid}
                    ></BidCard>)
                }
            </div>
        </div>
    );
};

export default MyBids;