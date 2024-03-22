import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";


const Post = ({ post }) => {
    const {_id, bookName } = post;
    const [bids,setBids] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/bids/${_id}`)
        .then(data=>{

            setBids(data.data);
        })
        .catch(error=>console.log(error))
    },[_id])

    return (
        <div className="bg-gray-300">
            <h2 className="text-xl font-bold">Book Name : {bookName}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bidder</th>
                            <th>Deadline</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {
                                bids?.map(bid=>  <TableRow key={bid._id} bid={bid}></TableRow>)
                            }
                           
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Post;