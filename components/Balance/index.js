import { StyleSheet, Text, View } from "react-native";

export default function Balance() {
  return (
    <View style={styles.balance}>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.mainNumber}>$3104,55</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#4E6DFF",
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
    fontSize: 20,
    marginLeft: 10,
  },
  mainNumber: {
    color: "#FBFEFF",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10,
  },
});
