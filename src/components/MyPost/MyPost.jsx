import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";


const MyPost = () => {
    const posts = useLoaderData(null);
    console.log(posts);
    return (
        <div>
          
            <div className="">
                {posts?.result.length === 0 ? <div className="flex items-center justify-center min-h-[70vh] "><p className="text-base">No items found </p></div>
                    : posts?.result.map(post => <Post
                        key={post._id}
                        post={post}
                    >
                    </Post>)
                }
            </div>
        </div>
    );
};

export default MyPost;