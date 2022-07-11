import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function List(props) {
  const { itemList, onHandlerModal } = props;
  return (
    <>
      <View>
        <Text style={styles.title}>Mi Portfolio</Text>
      </View>
      <FlatList
        horizontal={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={itemList}
        renderItem={(data) => (
          <TouchableOpacity
            onPress={() => onHandlerModal(data.item.id)}
            style={
              data.item.completed ? [styles.item, styles.itemRed] : styles.item
            }
          >
            <Text style={styles.text}>{data.item.value}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5F5CFA",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
    marginTop: "10%",
    width: "47%",
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  itemRed: {
    backgroundColor: "#EB3324",
  },
  title: {
    color: "#000",
    fontSize: 20,
    marginLeft: 10,
  },
  text: {
    color: "#FBFEFF",
    fontSize: 15,
    marginLeft: 10,
  },
});
