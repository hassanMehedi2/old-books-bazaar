import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";


const MyPost = () => {
    const posts = useLoaderData(null);
    
    return (
        <div>
            <p>total Posts {posts?.length}</p>
           <div className="">
           {
                posts?.map(post=> <Post
                key={post._id}
                post={post}
                >
                </Post> )
            }
           </div>
        </div>
    );
};

export default MyPost;