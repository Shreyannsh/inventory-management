import axios from "axios";

import {
  ADD_ITEM,
  FETCH_SALES,
  UPDATE_ITEM,
  ADD_SALE,
  REMOVE_ITEM,
  FETCH_INVENTORY,
  ERROR,
} from "./const.js";

export const fetchItems = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://inventory-backend-rho.vercel.app/v1/api/items/items"
    );
    if (response.status === 200) {
      dispatch({ type: FETCH_INVENTORY, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const addItem = (newItems) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://inventory-backend-rho.vercel.app/v1/api/items/add-item",
      {
        ...newItems,
      }
    );
    dispatch({ type: ADD_ITEM, payload: response.data.data });
    //if(response.success)
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const removeItem = (itemId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://inventory-backend-rho.vercel.app/v1/api/items/${itemId}`
    );
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
  try {
    console.log(itemId, updatedItem);
    const response = await axios.post(
      `https://inventory-backend-rho.vercel.app/v1/api/items/${itemId}/update`,
      {
        ...updatedItem,
      }
    );
    console.log(response);
    dispatch({ type: UPDATE_ITEM, payload: response.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
  }
};

export const fetchSales = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://inventory-backend-rho.vercel.app/v1/api/sales/sales"
    );
    console.log(response);
    dispatch({ type: FETCH_SALES, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const addSale = (newSale) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://inventory-backend-rho.vercel.app/v1/api/sales/add-sale",
      { ...newSale }
    );

    dispatch({ type: ADD_SALE, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
