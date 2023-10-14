import {
  ADD_ITEM,
  FETCH_SALES,
  UPDATE_ITEM,
  ADD_SALE,
  REMOVE_ITEM,
  FETCH_INVENTORY,
} from "./const.js";

const initialState = {
  inventory: [],
  sales: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return { ...state, inventory: action.payload };

    case ADD_ITEM:
      return { ...state, inventory: [...state.inventory, action.payload] };

    case REMOVE_ITEM:
      const updatedInventory = state.inventory.filter(
        ({ _id }) => _id !== action.payload
      );
      return { ...state, inventory: updatedInventory };

    case UPDATE_ITEM:
      const inventoryWithUpdatedItem = state.inventory.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, inventory: inventoryWithUpdatedItem };

    case FETCH_SALES:
      return { ...state, sales: action.payload };

    case ADD_SALE:
      return { ...state, sales: [...state, action.payload] };

    default:
      return state;
  }
};

export default reducer;
