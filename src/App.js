import { useState } from "react";
import css from "./App.module.css";
import Posts from "./Posts/Posts";
import { postService } from "./services/posts.service";
import UserDetails from "./UserDetails/UserDetails";
import Users from "./Users/Users";

function App() {
  const [user, setUser]= useState(null);
  const getUser =(userFromUsersComponent)=>{
    setUser(userFromUsersComponent)
    setPosts([])
  }


  const [posts, setPosts]= useState([]);
  const getUserId = (idUserFromUserDetails)=>{

    postService.getAllPostOfUser(idUserFromUserDetails).then(arrayPosts=>setPosts(...[arrayPosts]))
  }


  
  return (
    <div>
      <div className={css.wrap}>
        <Users getUser={getUser}/>
       { user && <UserDetails user={user} getUserId={getUserId}/>}
      </div>
      {!!posts.length && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
