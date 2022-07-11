import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddItem(props) {
  const { textItem, onHandlerChangeItem, onHandlerAddItem } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escribe aqui"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <Button
        title="Add"
        onPress={onHandlerAddItem}
        disabled={textItem.length < 1 ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#B5B5B5",
    borderWidth: 1,
    borderRadius: 15,
  },
});
