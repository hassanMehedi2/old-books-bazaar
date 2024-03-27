
import Banner from "./Banner/Banner";
import SellPosts from "./SellPosts/SellPosts";
import TopBiddedBooks from "./TopBiddedBooks/TopBiddedBooks";


const Home = () => {
   
    return (
        <div className="">
            <Banner></Banner>
          <SellPosts ></SellPosts>
          <TopBiddedBooks></TopBiddedBooks>
          
        </div>
    );
};

export default Home;