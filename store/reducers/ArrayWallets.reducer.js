import { arrayWallets } from "../../data/ArrayWallets";
import { SELECT_WALLET } from "../actions/ArrayWallets.action";

const initialState = {
  arrayWallets: arrayWallets,
  filteredArrayWallets: [],
  selected: null,
};

const arrayWalletsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WALLET:
      const IndexWallet = state.arrayWallets.findIndex(
        (wallet) => wallet.id === action.walletID
      );
      return { ...state, selected: state.arrayWallets[IndexWallet] };
    default:
      return state;
  }
};

export default arrayWalletsReducer;
