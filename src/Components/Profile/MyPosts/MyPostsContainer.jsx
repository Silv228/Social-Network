import { connect } from "react-redux";
import { addpostActionCreate, updatepostActionCreate } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return ({
    state: state.ProfilePage
  })
}

let mapDispatchToProps = (dispatch) => {
  return ({
    newPost : () => dispatch(addpostActionCreate()),
    ChangePost : (event) => dispatch(updatepostActionCreate(event)),
  })
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;