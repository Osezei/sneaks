const reducer = function (state, action) {
  //company
  if (action.type === "MANAGE_COMPANY" && action.payload === "all") {
    return {
      ...state,
      shoes: state.allShoes,
      activeFilter: action.payload,
    };
  }
  if (action.type === "MANAGE_COMPANY") {
    let shoes = state.allShoes;
    shoes = shoes.filter((shoe) => shoe.company === action.payload);
    return {
      ...state,
      shoes,
      activeFilter: action.payload,
    };
  }
  // category
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
  //   gender
  if (action.type === "MANAGE_GENDER" && action.payload === "all") {
    return {
      ...state,
      shoes: state.allShoes,
      activeFilter: action.payload,
    };
  }
  if (action.type === "MANAGE_GENDER") {
    let shoes = state.allShoes;
    shoes = shoes.filter((shoe) => shoe.gender === action.payload);
    return {
      ...state,
      shoes,
      activeFilter: action.payload,
    };
  }
  //   sort
  if (action.type === "MANAGE_SORT" && action.payload === "lowest") {
    const shoes = [...state.shoes].sort((a, b) => a.price - b.price);
    return {
      ...state,
      shoes,
    };
  }
  if (action.type === "MANAGE_SORT" && action.payload === "highest") {
    const shoes = [...state.shoes].sort((a, b) => b.price - a.price);
    return {
      ...state,
      shoes,
    };
  }
  if (action.type === "MANAGE_SORT" && action.payload === "ascending") {
    const shoes = [...state.shoes].sort((a, b) => a.name.localeCompare(b.name));
    return {
      ...state,
      shoes,
    };
  }
  if (action.type === "MANAGE_SORT" && action.payload === "descending") {
    const shoes = [...state.shoes].sort((a, b) => b.name.localeCompare(a.name));
    return {
      ...state,
      shoes,
    };
  }
  //price
  if (action.type === "SET_PRICE") {
    let maximum_Price = state.shoes.map((shoe) => shoe.price);
    maximum_Price = Math.max(...maximum_Price);
    return {
      ...state,
      maximumPrice: maximum_Price,
      price: maximum_Price,
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    let tempItems = state.allShoes.filter(
      (shoe) => shoe.price <= action.payload
    );
    return {
      ...state,
      price: action.payload,
      shoes: tempItems,
    };
  }
  if (action.type === "CLEAR") {
    let maximum_Price = state.allShoes.map((shoe) => shoe.price);
    maximum_Price = Math.max(...maximum_Price);
    return {
      ...state,
      shoes: state.allShoes,
      activeFilter: "all",
      minimumPrice: 0,
      maximumPrice: maximum_Price,
      price: maximum_Price,
    };
  }
  throw new Error(`No matching '${action.type}' - action type`);
};
export default reducer;
