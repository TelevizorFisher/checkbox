import { connect } from "react-redux";
import { changeThreeActionCreator } from "../redux/list-reducer";
import CheckboxThree from "./CheckboxThree";

let mapStateToProps = (state) => {
  return {
    list: state.list.list3,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    update: (item, value) => {
      let action = changeThreeActionCreator(item, value);
      dispatch(action);
    },
  };
};
const CheckboxThreeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxThree);

export default CheckboxThreeContainer;
