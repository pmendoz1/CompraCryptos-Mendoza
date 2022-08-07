import { createStore, combineReducers } from "redux";
import arrayCryptosReducer from "./reducers/ArrayCryptos.reducer";
import arrayWalletsReducer from "./reducers/ArrayWallets.reducer";

const RootReducer = combineReducers({
  arrayCryptos: arrayCryptosReducer,
  arrayWallets: arrayWalletsReducer,
});

export default createStore(RootReducer);
