import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BalanceDetail = (props) => {
  const { balance, portfolioItems } = props;
  return (
    <View>
      <Text style={styles.title}>Cantidad de Wallets: {portfolioItems}</Text>
      <Text style={styles.title}>
        Variación de balance 24 hs: ${balance.variable24hs}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balance: {
    flexDirection: "column",
    backgroundColor: "#4E6DFF",
    justifyContent: "space-evenly",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 30,
    marginTop: "10%",
    marginBottom: "10%",
    width: "100%",
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    color: "#FBFEFF",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "LatoRegular",
  },
  mainNumber: {
    color: "#FBFEFF",
    fontSize: 25,
    marginLeft: 10,
    fontFamily: "LatoItalic",
  },
});
export default BalanceDetail;
