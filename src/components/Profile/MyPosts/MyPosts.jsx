import { type } from "os";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
       const myPostsElements = props.myPostsData.map(post => <Post message={post.message} likes={post.likes} dates={post.dates} clearID={post.clearID}/> )

       const newPostElement =React.createRef();
       
       const addPost = () => { 
           props.dispatch({type: "ADD-POST"});

        }
        let onPostChange = () =>{
           let text = newPostElement.current.value;

           props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
        }
       return (
        <div>
            <h1 className={`${s.item} ${s.active}`}>
                MyPosts
            </h1>
            <textarea onChange={onPostChange} cols="60" ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPost}>
                запостить
            </button>
        
             {myPostsElements}

        </div>
    );
}
export default MyPosts;