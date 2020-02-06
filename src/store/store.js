import { createStore } from "redux";
import rootReducers from "../reducers/index";

function configureStore(state = { rotating: true }) {
  return createStore(rootReducers,state);
}

export default configureStore;