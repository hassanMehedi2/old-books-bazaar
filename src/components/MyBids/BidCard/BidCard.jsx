

const BidCard = ({bid}) => {
    const {sellPostId, bookName, biddersEmail, sellersEmail, biddingAmount, deadline,status}=bid;
    return (
        <div className="bg-gray-200 mb-8 p-5 rounded-2xl flex justify-between px-10  ">
            <div className="space-y-2">
            <h2 className="text-xl  font-medium mt-2">Books Name : {bookName}</h2>
            <p>Email : {sellersEmail}</p>
            <p>Deadline: {deadline}</p>
            <div>
                <p>Status : <span  className={status==="canceled" ? 'text-red-500 font-semibold' : `text-green-500 font-semibold`}>{status}</span></p>
            </div>
            </div>
            <div className="flex justify-center items-center">
            <p {...(status!=="in progress"&& { disabled: 'disabled' })} className="btn btn-sm bg-teal-300">Complete</p>
            </div>
        </div>
    );
};

export default BidCard;