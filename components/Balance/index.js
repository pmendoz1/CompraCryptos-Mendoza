import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BalanceDetail from "../BalanceDetail";
import { LinearGradient } from "expo-linear-gradient";
import { objBalance } from "../../data/ObjBalance";
import { arrayWallets } from "../../data/ArrayWallets";

const Balance = (props) => {
  const balance = objBalance;
  const portfolioItems = arrayWallets;
  const { balanceDetailVisible, onHandlerBalanceDetail } = props;
  return (
    <TouchableOpacity onPress={onHandlerBalanceDetail}>
      <LinearGradient
        colors={["#bb8588", "#d8a48f"]}
        style={styles.balance}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.title}>Balance</Text>
        <Text style={styles.mainNumber}>${balance.balanceActual}</Text>
        {balanceDetailVisible ? (
          <BalanceDetail
            balance={balance}
            portfolioItems={portfolioItems.length}
          />
        ) : null}
        {balanceDetailVisible ? (
          <Text style={styles.title2}>(Presione para cerrar detalles)</Text>
        ) : (
          <Text style={styles.title2}>(Presione para más detalles)</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
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
    minHeight: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    color: "#FBFEFF",
    fontSize: 20,
    marginLeft: 20,
    fontFamily: "LatoRegular",
  },
  title2: {
    color: "#FBFEFF",
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "LatoItalic",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  },
  mainNumber: {
    color: "#FBFEFF",
    fontSize: 25,
    marginLeft: 10,
    fontFamily: "LatoItalic",
  },
});
export default Balance;
