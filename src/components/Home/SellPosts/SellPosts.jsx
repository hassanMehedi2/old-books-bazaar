import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PostCard from "./PostCard/PostCard";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import RangeSlider from "./RangeSlider";
import Skeleton from "../../Shared/Skeleton/SkeletonCard";
import SkeletonCard from "../../Shared/Skeleton/SkeletonCard";
import FilterByAuthor from "./FilterByAuthor/FilterByAuthor";


const SellPosts = () => {
    const axios = useAxios();
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);
    // range slider 
    const [priceRange, setPriceRange] = useState(0);

    const limit = 6;
    const handleTab = value => {
        setCategory(value);
        setPage(1);
        setPriceRange(0);
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/v1/sell_posts?category=${category}`)
    //         .then(data => {
    //             setPosts(data.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [category])

 
    // tanstack query 
    const getPosts = async () => {
        const res = await axios.get(`/sell_posts?category=${category}&page=${page}&size=${limit}&less_than=${priceRange}`);
        return res;
    }
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch // Function to manually trigger data fetching
    } = useQuery({
        queryKey: ['post', category, page ],   //dependancy
        queryFn: getPosts
    })

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }

    }
    let totalPage = 1;
    totalPage = Math.ceil(posts?.data?.total / limit);


    if (isError) {
        console.log(error);
    }
    
       // data  fetch if the finter button id pressed based on price range
    
       const handleMaxAmount =  () => {
        refetch();
     }
 



    return (
        <div className="my-20 ">
            <h1 className="text-2xl mb-5 font-bold">Bid Now !</h1>


            <div className="grid grid-cols-4">
                <div className="">
                    <div className="p-5   text-[#777777]">
                        <p className=" text-base font-semibold mb-7">Filter By Price</p>
                        <div>
                            <RangeSlider
                                range={priceRange}
                                setRange={setPriceRange}
                            ></RangeSlider>
                            <p className="text-sm font-medium mt-3 mb-3 "> ৳ 0 --- ৳ {priceRange}</p>
                            <button onClick={handleMaxAmount} className='btn btn-sm   text-sm  rounded-2xl text-white bg-[#777777]'>Filter</button>
                        </div>
                    </div>
                    <div className="mt-14">
                        <FilterByAuthor></FilterByAuthor>
                    </div>
                </div>
                <div className=" px-1 col-span-3">

                    {/* react tabs  */}
                    <Tabs>
                        <TabList className={"text-base font-medium "}>
                            <Tab onClick={() => handleTab('')}>All</Tab>
                            <Tab onClick={() => handleTab('fiction')}>Fiction</Tab>
                            <Tab onClick={() => handleTab('non-fiction')}>Non Fiction</Tab>
                            <Tab onClick={() => handleTab('science-fiction')}>Science Fiction</Tab>
                            <Tab onClick={() => handleTab('islamic')}>Islamic</Tab>
                        </TabList>
                        {
                            posts?.data?.result.length === 0 ? <div className="flex items-center justify-center min-h-96"><p className="text-base">No items found </p></div>
                                : <div className="py-10 ">

                                    {
                                        [...Array(5).fill(0)].map(() => 
                                        
                                        <TabPanel className={"w-full"} >
                                            <div className="grid grid-cols-3 gap-8  min-h-80  px-4">
                                                {isLoading ? [...Array(6).fill(0)].map(() => <SkeletonCard></SkeletonCard>)
                                                    : posts?.data?.result?.map(post => <PostCard key={post._id} post={post}></PostCard>)
                                                }

                                            </div>
                                        </TabPanel>)
                                    }
                                    
                                </div>
                        }
                    </Tabs>
                    {/* paigination  */}

                    {
                        isLoading ? <span className="loading loading-dots loading-lg"></span>
                            : <div className="join flex justify-center" >
                                <button onClick={handlePrevious} className="join-item btn">«</button>
                                {
                                    [...Array(totalPage).fill(0)]?.map((item, index) => {
                                        const pageNumber = index + 1;

                                        return (
                                            <button
                                                key={pageNumber}
                                                onClick={() => setPage(pageNumber)}
                                                className={`${page === pageNumber ? 'btn btn-ghost bg-green-300 join-item' : 'btn btn-ghost join-item'} `}
                                            >
                                                {pageNumber}
                                            </button>
                                        )
                                    })
                                }
                                <button onClick={handleNext} className="join-item btn">»</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default SellPosts;