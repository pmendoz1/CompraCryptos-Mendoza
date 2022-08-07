import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const CryptosDetail = () => {
  const crypto = useSelector((store) => store.arrayCryptos.selected);

  return (
    <LinearGradient
      colors={["#8093f1", "#b388eb", "#ffd6ff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <LinearGradient
        colors={["#bb8588", "#d8a48f"]}
        style={styles.balance}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View>
          <Text style={styles.title}>Nombre: {crypto.nombre}</Text>
          <Text style={styles.title}>Precio Actual: ${crypto.precio}</Text>
          <Text style={styles.title}>
            Variación últimas 24 Hs: ${crypto.variable24hs}
          </Text>
          <Text style={styles.title}>
            Cantidad Disponible: {crypto.disponible}
          </Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  screen: {
    marginTop: "10%",
    padding: 5,
    paddingBottom: 1,
    justifyContent: "space-evenly",
    height: "100%",
  },
  screen2: {
    flex: 1,
    height: 160,
  },
});

export default CryptosDetail;
