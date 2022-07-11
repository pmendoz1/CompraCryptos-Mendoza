import { StyleSheet, View, Text } from "react-native";
export default function MyTabs() {
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 0,
    marginTop: "0%",
    marginBottom: "0%",
    width: "100%",
    height: 45,
  },
  title: {
    color: "#000",
    fontSize: 15,
    marginLeft: 10,
  },
});
