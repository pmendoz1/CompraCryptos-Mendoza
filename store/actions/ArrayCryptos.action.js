export const SELECT_CRYPTO = "SELECT_CRYPTO";

export const selectCrypto = (id) => ({
  type: SELECT_CRYPTO,
  cryptoID: id,
});
