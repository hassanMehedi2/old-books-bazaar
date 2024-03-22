
const TableRow = ({ bid }) => {
    const {sellPostId, bookName, biddersEmail, sellersEmail, biddingAmount, deadline,status } = bid;
    return (
       <tr>
        <td>{bookName}</td>
            <td>{biddersEmail}</td>
            <td>{deadline}</td>
            <td>{biddingAmount}</td>
            <td>{status}</td>
       </tr>
    );
};

export default TableRow;