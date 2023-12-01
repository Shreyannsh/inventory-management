import axios from "axios";
import { toast } from "react-toastify";

import {
  ADD_ITEM,
  FETCH_SALES,
  UPDATE_ITEM,
  ADD_SALE,
  REMOVE_ITEM,
  FETCH_INVENTORY,
  ERROR,
  LOADING,
} from "./const.js";

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
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
    dispatch({ type: LOADING });
    const response = await axios.post(
      "https://inventory-backend-rho.vercel.app/v1/api/items/add-item",
      newItems
    );
    if (response.status === 200) {
      dispatch({ type: ADD_ITEM, payload: response.data.data });
      toast.success("Item added Successfully!");
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const removeItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(
      `https://inventory-backend-rho.vercel.app/v1/api/items/${itemId}`
    );
    if (response.status === 204) {
      dispatch({ type: REMOVE_ITEM, payload: itemId });
      toast.success("Item removed Successfully!");
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(
      `https://inventory-backend-rho.vercel.app/v1/api/items/${itemId}/update`,
      {
        ...updatedItem,
      }
    );
    if (response.status === 200) {
      dispatch({ type: UPDATE_ITEM, payload: response.data.data });
      toast.success("Item edited Successfully!");
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const fetchSales = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(
      "https://inventory-backend-rho.vercel.app/v1/api/sales/sales"
    );
    if (response.status === 200) {
      dispatch({ type: FETCH_SALES, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const addSale = (newSale) => async (dispatch) => {
  console.log(newSale);
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(
      "https://inventory-backend-rho.vercel.app/v1/api/sales/add-sale",
      { ...newSale }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: ADD_SALE, payload: response.data.data });
      toast.success("Sale added Successfully!");
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
