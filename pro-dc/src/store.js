import { createStore} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import rootred from "./redux/reducers/rootred";


const store = createStore(
    rootred
);


export default store;