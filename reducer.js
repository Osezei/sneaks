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
  if (action.type === "ADD_TO_CART") {
    const { id, amount, item } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id,
        name: item.name,
        price: item.price,
        max: item.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
        tempstock: 1,
      };
    }
  }
  if (action.type === "CLEAR_CART_ITEMS") {
    return {
      ...state,
      cart: [],
      tempstock: 1,
    };
  }
  if (action.type === "AMOUNT_INCREASE") {
    const { value, stock } = action.payload;

    let tempValue = value + 1;

    if (tempValue > stock) {
      tempValue = stock;
      return {
        ...state,
      };
    }
    return {
      ...state,
      tempstock: tempValue,
    };
  }
  if (action.type === "AMOUNT_DECREASE") {
    const { value, stock } = action.payload;

    let tempValue = value - 1;

    if (tempValue < 1) {
      tempValue = 1;
      return {
        ...state,
        tempstock: tempValue,
      };
    }
    return {
      ...state,
      tempstock: tempValue,
    };
  }
  if (action.type === "INCREASE_CART_AMOUNT") {
    const { id } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + 1;
        if (newAmount > item.max) {
          newAmount = item.max;
        }
        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "DECREASE_CART_AMOUNT") {
    const { id } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return {
          ...item,
          amount: newAmount,
        };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "COUNT_TOTAL_CART_ITEMS") {
    const { totalShoes, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.totalShoes += amount;
        total.totalAmount += price * amount;
        return total;
      },
      {
        totalAmount: 0,
        totalShoes: 0,
      }
    );
    return { ...state, totalAmount, totalShoes };
  }
  throw new Error(`No matching '${action.type}' - action type`);
};
export default reducer;
