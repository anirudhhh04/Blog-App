
function NewPost( {submit,postTitle,setPostTitle,postBody,setPostBody}){
    return(
       <main className="NewPost">
          <h2>NewPost</h2>
          <form className="newPostForm" onSubmit={submit}>
            <label htmlFor="postTitle">Title:</label>
            <input id="postTitle" type="text"  required value={postTitle}
               onChange={(e) => setPostTitle(e.target.value)}/>
            <label htmlFor="postBody">Post:</label>
            <textarea value={postBody} id="postBody" required onChange={(e)=>setPostBody(e.target.value)}/>
            <button type="submit">Submit</button>
          </form>
       </main>
    );
}
export default NewPost;