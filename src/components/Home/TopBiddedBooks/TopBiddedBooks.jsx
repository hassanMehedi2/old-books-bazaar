import axios from "axios";
import { useEffect, useState } from "react";
import TopBiddedCard from "./TopBiddedCard";


const TopBiddedBooks = () => {
    const [topBiddedPostsIds, setTopBiddedPostsIds] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/topBiddedSellPosts')
            .then(data => {
                setTopBiddedPostsIds(data.data.topBiddedSellPostsIds)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="mb-24">
            <div>
                <h1 className="text-2xl mb-5 font-bold ">Top Bidded Books </h1>
                <div className="grid grid-cols-5 gap-8 h-[600px]" >
                    <div className="md:col-span-3 relative max-h-[600px]">
                        <img className="w-full rounded-xl h-full object-cover" src="https://i.ibb.co/xDp2FK3/Capture.png" alt="bidded image" />

                        <div className="absolute bottom-[8vh] left-24 flex">
                            <div>
                                <p className="text-md font-medium mb-2 text-white">Bid Now Grab Now</p>
                                <h1 className="text-3xl font-bold text-white">Top Bidded  <br />Books is here Hurry !!!</h1>
                            </div>
                            <div className=" flex justify-center ml-14 items-end">
                                <span className="countdown font-mono text-2xl text-black bg-yellow-400 rounded-2xl px-3 py-2">
                                    <span style={{ "--value": 10 }}></span>h
                                    <span style={{ "--value": 24 }}></span>m
                                    <span style={{ "--value": 58 }}></span>s
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="md:col-span-2 h-full ">
                        <div className=" grid grid-rows-3 h-full gap-5 ">
                            {
                              topBiddedPostsIds &&  topBiddedPostsIds?.map(topPostId => <TopBiddedCard
                                key={topPostId}
                                topPostId = {topPostId}
                                >

                                </TopBiddedCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBiddedBooks;