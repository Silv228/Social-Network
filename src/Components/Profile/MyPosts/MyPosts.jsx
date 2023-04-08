import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  
  const postElements = props.state.posts.map(post => <Post ava = {props.state.profile.photos.small} message={post.message} likes={post.likes} />)
  const OnAddPost = () => {
    props.newPost()
  }
  const OnChangePost = event => {
    props.ChangePost(event.target.value)
  }
  return (
    <div className={style.content}>
      {props.state.isMyProfile ? 
        <div>
          <h3>Create new post</h3>
          <Post ava = {props.state.profile.photos.small} likes={0} message={<textarea onChange={OnChangePost} value={props.state.newTextPost} className={style.new_post} />}/>
          <button onClick={OnAddPost} className={style.publish_btn}>Create</button>
        </div> : ''
      }
      <div className={style.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;