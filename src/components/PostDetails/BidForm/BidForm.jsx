
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BidForm = ({ post }) => {
    const {_id,bookName, postedBy } = post;
    let isValid = false;
    const { user } = useAuth();
    const navigate = useNavigate();

    //   check not to bid its own post 
    if (user?.email === postedBy) {
        isValid = true;
    }

    const handleAddBid = e => {
        e.preventDefault();
        const sellPostId = _id;
        const biddersEmail = user?.email;
        const sellersEmail = postedBy;
        const biddingAmount = e.target.biddingAmount.value;
        const deadline = e.target.deadline.value;
        const status = "pending";
        const bid = {sellPostId, bookName, biddersEmail, sellersEmail, biddingAmount, deadline,status };

        axios.post('http://localhost:5000/api/v1/bids', bid)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast.success("bid successfully")
                    navigate(`/my_bids/${user?.email}`)
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleAddBid} className="  p-5 w-2/5 mx-auto bg-slate-100">
                <div>
                    <h2 className="text-center my-10 font-semibold text-xl">Place your bid</h2>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Bidding Amount</span>
                    </label>
                    <input type="number" name="biddingAmount" placeholder="Bidding Amount" className="input text-sm input-bordered" required />
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name="deadline" placeholder="deadline" className="input text-sm input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Bidders Email</span>
                    </label>
                    <input type="email" placeholder="bidders email" defaultValue={user?.email} className="input text-sm  input-bordered" readOnly />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Sellers Email</span>
                    </label>
                    <input type="email" placeholder="sellers email" defaultValue={postedBy} className="input text-sm input-bordered" readOnly />
                </div>


                <div>
                    {
                        isValid ? <input disabled className="btn btn-alert text-base font-semibold text-white bg-gray-500 w-full my-6" type="submit" value={'Bid on the product'} />
                            : <input className="btn btn-alert text-base font-semibold text-white bg-gray-500 w-full my-6" type="submit" value={'Bid on the product'} />

                    }
                </div>
            </form>
        </div>
    );
};

export default BidForm;