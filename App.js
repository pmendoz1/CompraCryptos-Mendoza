import { StyleSheet, View } from "react-native";
import { useState } from "react";
import CustomModal from "./components/Modal";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Balance from "./components/Balance";
import MyTabs from "./components/Navigation";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Date.now(), value: textItem, completed: false },
    ]);
    // setItemList({...itemList, id: Math.random()*10, value: textItem }) => hace lo mismo que la de arriba
    setTextItem("");
  };

  const onHandlerDeleteItem = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const onHandlerCompleteItem = (id) => {
    let itemCompleted = itemList.findIndex((item) => item.id === id);
    itemList[itemCompleted].completed = true;
    setItemList([...itemList]);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <LinearGradient
        colors={["#D16BA5", "#86A8E7", "#5FFBF1"]}
        style={styles.container}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.screen}>
          <CustomModal
            modalVisible={modalVisible}
            onHandlerDeleteItem={onHandlerDeleteItem}
            itemSelected={itemSelected}
            onHandlerCompleteItem={onHandlerCompleteItem}
          />
          <AddItem
            textItem={textItem}
            onHandlerAddItem={onHandlerAddItem}
            onHandlerChangeItem={onHandlerChangeItem}
          />
          <Balance />
          <List itemList={itemList} onHandlerModal={onHandlerModal} />
        </View>
        <View style={styles.navigation}>
          <MyTabs />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: "10%",
    padding: 0,
    paddingBottom: 1,
  },
  screen: {
    marginTop: "10%",
    padding: 5,
    paddingBottom: 1,
    // backgroundColor: "#F6FAFF",
    height: "56%",
  },
  navigation: {
    backgroundColor: "#F6FAFF",
    height: "100%",
  },
});
