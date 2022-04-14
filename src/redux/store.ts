import { createStore } from "redux";
import { gameReduce } from "./reducers/game";


export default createStore(gameReduce)