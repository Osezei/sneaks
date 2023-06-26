const reducer = function (state, action) {
  if (action.type === "MANAGE_CATEGORY" && action.payload === "all") {
    return {
      ...state,
      shoes: state.allShoes,
      activeFilter: action.payload,
    };
  }
  if (action.type === "MANAGE_CATEGORY") {
    let shoes = state.allShoes;
    shoes = shoes.filter((shoe) => shoe.category === action.payload);
    return {
      ...state,
      shoes,
      activeFilter: action.payload,
    };
  }

  throw new Error(`No matching '${action.type}' - action type`);
};
export default reducer;
