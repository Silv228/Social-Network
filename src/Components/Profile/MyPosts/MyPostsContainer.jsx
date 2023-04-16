import { connect } from "react-redux";
import { addpostActionCreate} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return ({
    state: state.ProfilePage
  })
}

let mapDispatchToProps = (dispatch) => {
  return ({
    newPost : (post) => dispatch(addpostActionCreate(post))
  })
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;