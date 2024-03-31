import { Link, useLoaderData, useParams } from "react-router-dom";
import PostCard from "./PostCard/PostCard";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const MyPost = () => {
    const axios = useAxios();
    const {email} = useParams();
    const [posts,setPosts]=useState();
    console.log(email);
    useEffect(()=>{
        axios.get(`/sell_posts?email=${email}`)
        .then(data=>{
            console.log(data.data);
            setPosts(data.data.result);
        })
        .catch(err=>console.log(err))
    },[email,axios])
    

const handleDeletePost = (postId) =>{
    Swal.fire({
        title: "Delete this post ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#50C878",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // delete from database 
            axios.delete(`/my_posts/delete/${postId}`)
                .then(data => {
                    console.log(data.data);
                    if (data.data.deletedCount > 0) {
                        // set the remaining post after deletation 
                        setPosts(posts.filter(post=> post._id !== postId))
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your post has been deleted.",
                            icon: "success"
                        });
                    }
                })
                .catch(err=>console.log(err))
        }
    });
}


    console.log(posts);
    return (
        <div className="mb-44 my-20 px-10">
          {
            posts?.length === 0 && <div className="flex items-center justify-center min-h-[70vh] "><p className="text-base">No items found</p><Link to={'/sell_books'} className="text-blue-600 ml-2">Sell A Book</Link></div>
            
          }
            <div className="grid grid-cols-2 gap-5">
                { posts?.map(post => <PostCard
                        key={post._id}
                        post={post}
                        handleDeletePost={()=>handleDeletePost(post._id)}
                    >
                    </PostCard>)
                }
            </div>
        </div>
    );
};

export default MyPost;