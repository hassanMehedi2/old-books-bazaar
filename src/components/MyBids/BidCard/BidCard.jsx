

const BidCard = ({bid}) => {
    const {sellPostId, bookName, biddersEmail, sellersEmail, biddingAmount, deadline,status}=bid;
    return (
        <div className="bg-gray-100 mb-5 px-9 rounded-2xl p-5 space-y-2">
            <h2 className="text-xl font-semibold mt-2">Post : {bookName}</h2>
            <p>Email : {sellersEmail}</p>
            <p>Deadline: {deadline}</p>
            <div>
                <p>Status : <span  className={status==="canceled" ? 'text-red-500 font-semibold' : `text-green-500 font-semibold`}>{status}</span></p>
            </div>
            <p {...(status!=="in progress"&& { disabled: 'disabled' })} className="btn btn-sm bg-teal-300">Complete</p>
        </div>
    );
};

export default BidCard;