const ADD_PROD_ONE = "ADD_PROD_ONE";
const SUBMIT_NEW = "SUBMIT_NEW";
const ADD_PROD_TWO = "ADD_PROD_TWO";
const ADD_PROD_THREE = "ADD_PROD_THREE";

let initialState = {
  list1: [
    { id: 1, name: "A", checked: false },
    { id: 2, name: "B", checked: false },
    { id: 3, name: "C", checked: false },
  ],
  list2: [
    { id: 4, name: "D", checked: false },
    { id: 5, name: "E", checked: false },
    { id: 6, name: "F", checked: false },
  ],
  list3: [
    { id: 7, name: "G", checked: false },
    { id: 8, name: "H", checked: false },
    { id: 9, name: "I", checked: false },
  ],
  listAll: [{}],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROD_ONE: {
      return {
        ...state,
        list1: state.list1.map((i) =>
          i.id === action.item1.id
            ? { ...action.item1, checked: action.value1 }
            : i
        ),
      };
    }
    case ADD_PROD_TWO: {
      return {
        ...state,
        list2: state.list2.map((i) =>
          i.id === action.item2.id
            ? { ...action.item2, checked: action.value2 }
            : i
        ),
      };
    }
    case ADD_PROD_THREE: {
      return {
        ...state,
        list3: state.list3.map((i) =>
          i.id === action.item3.id
            ? { ...action.item3, checked: action.value3 }
            : i
        ),
      };
    }
    case SUBMIT_NEW: {
      let listAll = state.list1.concat(state.list2, state.list3);
      console.log(`listAll`, listAll);
      console.log(`list`, state.list);

      return {
        ...state,
        listAll: listAll.map((i) => (i.checked === true ? i : "")),
      };
    }
    default:
      return state;
  }
};
export const changeFirstActionCreator = (item, value) => ({
  type: ADD_PROD_ONE,
  item1: item,
  value1: value,
});
export const changeTwoActionCreator = (item, value) => ({
  type: ADD_PROD_TWO,
  item2: item,
  value2: value,
});
export const changeThreeActionCreator = (item, value) => ({
  type: ADD_PROD_THREE,
  item3: item,
  value3: value,
});
export const submitActionCreator = () => ({
  type: SUBMIT_NEW,
});

export default listReducer;
