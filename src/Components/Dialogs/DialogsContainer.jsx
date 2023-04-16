import Dialogs from "./Dialogs";
import { addmessageActionCreate } from "../../redux/dialog_reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    state : state.MessagePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setMessage : (message) => dispatch(addmessageActionCreate(message))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)
(Dialogs)
