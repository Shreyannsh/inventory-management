import { applyMiddleware, createStore } from "redux";
import { thunk } from "react-redux";

import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
