import { connect } from "react-redux";
import {  changeFirstActionCreator } from "../redux/list-reducer";
import CheckboxFirst from "./CheckboxOne";

let mapStateToProps = (state) => {
  return {
    list: state.list.list1,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    update: (item, value) => {
      let action = changeFirstActionCreator(item, value);
      dispatch(action);
    },
  };
};
const CheckboxFirstContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxFirst);

export default CheckboxFirstContainer;
