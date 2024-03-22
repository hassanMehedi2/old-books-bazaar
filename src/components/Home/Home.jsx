import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SellPosts from "./SellPosts/SellPosts";


const Home = () => {
    const posts= useLoaderData({});
    console.log(posts);
    return (
        <div className="">
            <Banner></Banner>
          
          <SellPosts posts={posts}></SellPosts>
        </div>
    );
};

export default Home;