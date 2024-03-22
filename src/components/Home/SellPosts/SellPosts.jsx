import PostCard from "./PostCard/PostCard";

const SellPosts = ({posts}) => {
    return (
        <div>
           <div className="grid grid-cols-4 gap-3">
           {
                posts.map(post=> <PostCard key={post._id} post={post}></PostCard>)
            }
           </div>
        </div>
    );
};

export default SellPosts;