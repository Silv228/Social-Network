import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useForm } from "react-hook-form";

const NewPostForm = ({onSubmit, ava}) =>{
  const {register,  handleSubmit, reset} = useForm({mode: 'onChange'})

  return(
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} >
      <Post ava = {ava} likes = {0} message = {<textarea {...register('newPost')} className={style.new_post} />} />
      <button className={style.publish_btn}>Create</button>
    </form>
  ) 
}

const MyPosts = (props) => {
  const postElements = props.state.posts.map(post => <Post ava={props.state.profile.photos.small} key={post.id} message={post.message} likes={post.likes} />)
  const onAddPost = (data, reset) => {
    props.newPost(data.newPost)
    reset()
  }
  return (
    <div className={style.content}>
      {props.state.isMyProfile ?
        <div>
          <h3>Create new post</h3>
          <NewPostForm onSubmit={onAddPost} ava = {props.state.profile.photos.small}/>
        </div> : ''
      }
      <div className={style.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;