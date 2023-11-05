import {
  ADD_ITEM,
  FETCH_SALES,
  UPDATE_ITEM,
  ADD_SALE,
  REMOVE_ITEM,
  FETCH_INVENTORY,
  LOADING,
} from "./const.js";

const initialState = {
  inventory: [],
  sales: [],
  isLoading: false,
  isActive: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return { ...state, inventory: action.payload, isLoading: false };

    case ADD_ITEM:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        isLoading: false,
      };

    case REMOVE_ITEM:
      const updatedInventory = state.inventory.filter(
        ({ _id }) => _id !== action.payload
      );
      return { ...state, inventory: updatedInventory, isLoading: false };

    case UPDATE_ITEM:
      const inventoryWithUpdatedItem = state.inventory.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        inventory: inventoryWithUpdatedItem,
        isLoading: false,
      };

    case FETCH_SALES:
      return { ...state, sales: action.payload, isLoading: false };

    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload],
        isLoading: false,
      };

    case LOADING:
      return { ...state, isLoading: true };

    case "IS_ACTIVE":
      return { ...state, isActive: action.payload };

    default:
      return state;
  }
};

export default reducer;
