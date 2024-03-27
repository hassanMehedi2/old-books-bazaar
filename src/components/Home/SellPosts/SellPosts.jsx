import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PostCard from "./PostCard/PostCard";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import axios from "axios";


const SellPosts = () => {

    const [category, setCategory] = useState('');
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/sell_posts?category=${category}`)
            .then(data => {
                setPosts(data.data)
            })
            .catch(err => console.log(err))
    }, [category])

    const handleTab = value => {
        setCategory(value);
    }
    return (
        <div className="my-20">
            <h1 className="text-2xl mb-5 font-bold">Bid Now !</h1>
            <div className=" px-10">

                {/* react tabs  */}
                <Tabs>
                    <TabList className={"text-base font-medium bg-[#e1e8ed]"}>
                        <Tab onClick={() => handleTab('')}>All</Tab>
                        <Tab onClick={() => handleTab('fiction')}>Fiction</Tab>
                        <Tab onClick={() => handleTab('non-fiction')}>Non Fiction</Tab>
                        <Tab onClick={() => handleTab('science-fiction')}>Science Fiction</Tab>
                        <Tab onClick={() => handleTab('islamic')}>Islamic</Tab>
                    </TabList>
                    <div className="py-10">

                        <TabPanel className={"w-full"}>
                            <div className="grid grid-cols-4 gap-6  min-h-screen px-4">
                                {
                                    posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel className={"w-full"}>
                            <div className="grid grid-cols-4 gap-6  min-h-screen px-4">
                                {
                                    posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel className={"w-full"}>
                            <div className="grid grid-cols-4 gap-6  min-h-screen px-4">
                                {
                                    posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel className={"w-full"}>
                            <div className="grid grid-cols-4 gap-6  min-h-screen px-4">
                                {
                                    posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                }

                            </div>
                        </TabPanel>
                        <TabPanel className={"w-full"}>
                            <div className="grid grid-cols-4 gap-6   px-4">
                                {
                                    posts?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                }

                            </div>
                        </TabPanel>
                    </div>

                </Tabs>
            </div>
        </div>
    );
};

export default SellPosts;