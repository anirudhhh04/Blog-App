import Feed from './Feed.jsx';
function Home({posts}){
    return(
       <main className="Home">
         {posts.length ? (<Feed posts={posts}/>):(<p style={{marginTop:"2rem"}}>No Posts To Display</p>) }
       </main>
    );
}

export default Home;