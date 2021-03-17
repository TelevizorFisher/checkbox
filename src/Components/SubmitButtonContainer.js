import { connect } from "react-redux";
import { submitActionCreator } from "../redux/list-reducer";
import SubmitButton from "./SubmitButton";

let mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    submit: () => {
      dispatch(submitActionCreator());
    },
  };
};
const SubmitButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButton);

export default SubmitButtonContainer;
