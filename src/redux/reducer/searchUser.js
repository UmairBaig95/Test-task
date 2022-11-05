const initialState = {
  applicable_items: [],
  name: "",
  rate: null,
  applied_to: "",
};
const searchUser = (state = initialState, action) => {
  var data = {};
  switch (action.type) {
    case "sumbitResponse":
      data = {
        ...state,
        applicable_items: action.data.applicable_items,
        applied_to: action.data.applied_to,
      };
      break;
    case "submitValue":
      data = {
        ...state,
        name: action.data.addTax,
        rate: action.data.percentage,
      };
      break;
    default:
      return state;
  }

  console.log(data);
  return data;
};
export default searchUser;
