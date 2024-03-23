import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PostCard from "./PostCard/PostCard";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import axios from "axios";


const SellPosts = () => {

    const [category, setCategory] = useState();
    const [posts, setPosts] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/sell_posts?category=${category}`)
        .then(data=>{
            setPosts(data.data)
        })
        .catch(err=>console.log(err))
    },[category])

    const handleTab = value => {
        setCategory(value);
    }
    return (
        <div className="my-20">

            {/* react tabs  */}
            <Tabs>
                <TabList className={"text-lg font-semibold"}>
                    <Tab onClick={() => handleTab('fiction')}>Fiction</Tab>
                    <Tab  onClick={() => handleTab('science-fiction')}>Science Fiction</Tab>
                </TabList>

                <TabPanel className={"bg-gray-300 w-full "}>
                    <div className="grid grid-cols-4 gap-3">
                        {
                            posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                        <p>{category}</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-3">
                        {
                            posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                        <p>{category}</p>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default SellPosts;