export const SELECT_WALLET = "SELECT_WALLET";

export const selectWallet = (id) => ({
  type: SELECT_WALLET,
  walletID: id,
});
