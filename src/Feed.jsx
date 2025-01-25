import Post from './Post.jsx';
function Feed({posts}){
    return(
    <>
      {posts.map( post => (<Post key={post.id} post={post}/>))}
    </>
    );

}
export default Feed;