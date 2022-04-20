import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/PrpfileInfo";



const Profile = (props) => { 

   
    return (
        <div>
            <ProfileInfo />
            <MyPosts  myPostsData={props.myPostsData.myPostsData}
            newPostText={props.myPostsData.newPostText}
            dispatch={props.dispatch}/>
        </div>
    );
}
export default Profile;