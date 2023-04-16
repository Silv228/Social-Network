import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";


const MyPosts = (props) => {
  
  const postElements = props.state.posts.map(post => <Post ava = {props.state.profile.photos.small} message={post.message} likes={post.likes} />)
  const onAddPost = (values) => {
    props.newPost(values.newPost)
  }
  return (
    <div className={style.content}>
      {props.state.isMyProfile ? 
        <div>
          <h3>Create new post</h3>
          <NewPostFormRedux onSubmit = {onAddPost}/>
        </div> : ''
      }
      <div className={style.posts}>
        {postElements}
      </div>
    </div>
  )
}

const NewPostForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Post ava = {props.ava} likes = {0} message = {<Field component = "textarea" name="newPost" className={style.new_post} />} />
      <button className={style.publish_btn}>Create</button>
    </form>
  )
}

const mapStateToProps = (state) =>{
  return ({
    ava : state.ProfilePage.profile.photos.small
  })
}

const NewPostFormRedux = reduxForm({form : 'newPostForm'})(connect(mapStateToProps)(NewPostForm))

export default MyPosts;