import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Navigation() {
  return (
    <View style={styles.navigation}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Text style={styles.title}>Billetera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 0,
    height: 40,
  },
  title: {
    color: "#000",
    marginTop: 5,
    fontSize: 20,
    fontFamily: "LatoRegular",
  },
});
