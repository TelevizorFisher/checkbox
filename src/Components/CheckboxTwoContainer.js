import { connect } from "react-redux";
import { changeTwoActionCreator } from "../redux/list-reducer";
import CheckboxTwo from "./CheckboxTwo";

let mapStateToProps = (state) => {
  return {
    list: state.list.list2,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    update: (item, value) => {
      let action = changeTwoActionCreator(item, value);
      dispatch(action);
    },
  };
};
const CheckboxTwoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxTwo);

export default CheckboxTwoContainer;
