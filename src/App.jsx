import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import About from './About.jsx';
import Missing from './Missing.jsx';
import {Route , Routes ,useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import { format} from 'date-fns';

function App() {
     const [ search,setSearch]=useState('');
     const [ posts,setPosts]=useState([
          { id:1,title:"Travel Post",date:"august 01 2024", body:"Paris is a city of charm and elegance"},
          { id:2,title:"Food Post",date:"june 02 2024", body:"Pan Cakes are a Breakfast favourite"},
          { id:3,title:"Health Post",date:"july 05 2023", body:"Starting your day with yoga can improve flexibilty"},
          { id:4,title:"Educational Post",date:"august 04 2022", body:"Preparation is the key to Exam success"}
     ]);
     const h=useNavigate('');
     const [searchResults,setSearchResults]=useState([]);
     const [postTitle,setPostTitle]=useState('');
     const [postBody,setPostBody]=useState('');

     useEffect(()=> {
          const filtered=posts.filter(post => (post.body.toLowerCase()).includes(search.toLowerCase())
           || (post.title.toLowerCase()).includes(search.toLowerCase()) );
           setSearchResults(filtered.reverse());
     },[posts,search])

     const submit=(e)=>{
          e.preventDefault();
          const id=postBody.length?posts[posts.length-1].id+1:1;
          const date=format(new Date(),'MMMM dd,yyyy');
          const newPost={ id,title:postTitle,date,body:postBody };
          const updated=[...posts,newPost];
          setPosts(updated);
          setPostTitle('');
          setPostBody('');
          h('/');

     }
     function handleDelete(id){
       const updated= posts.filter(p=> p.id!==id);
       setPosts(updated);
       h('/');//return back to home page
     }
     return(
       <div className="App">
            <Header title="My blog"/>
            <Nav search={search} setSearch={setSearch}/>
            <Routes>
               <Route path="/" element={<Home posts={searchResults}/>}/>
               <Route path="/post" element={<NewPost submit={submit}
                                             postTitle={postTitle}
                                             setPostTitle={setPostTitle}
                                             postBody={postBody}
                                             setPostBody={setPostBody}/>}/>
               <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="*" element={<Missing/>}/>
            </Routes>
            <Footer/>
       </div>
     );
}

export default App;
