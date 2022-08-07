import { arrayCryptos } from "../../data/ArrayCryptos";
import { SELECT_CRYPTO } from "../actions/ArrayCryptos.action";

const initialState = {
  arrayCryptos: arrayCryptos,
  selected: null,
};

const arrayCryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CRYPTO:
      const IndexCrypto = state.arrayCryptos.findIndex(
        (crypto) => crypto.id === action.cryptoID
      );
      return { ...state, selected: state.arrayCryptos[IndexCrypto] };
    default:
      return state;
  }
};

export default arrayCryptosReducer;
