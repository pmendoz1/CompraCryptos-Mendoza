import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import CustomModal from "../Modal";
import AddItem from "../AddItem";
import List from "../List";
import Balance from "../Balance";
import { LinearGradient } from "expo-linear-gradient";
import Portfolio from "../Portfolio";
import Cryptos from "../Cryptos";

export default function MainScreen({ navigation }) {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [balanceDetailVisible, setBalanceDetailVisible] = useState(false);

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

  const onHandlerBalanceDetail = () => {
    setBalanceDetailVisible(!balanceDetailVisible);
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
        colors={["#8093f1", "#b388eb", "#ffd6ff"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView>
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
            <Balance
              balanceDetailVisible={balanceDetailVisible}
              onHandlerBalanceDetail={onHandlerBalanceDetail}
            />
            <View style={styles.screen2}>
              <Portfolio navigation={navigation} />
            </View>
            <View style={styles.screen2}>
              <Cryptos navigation={navigation} />
            </View>
            <View style={styles.screen2}>
              <List itemList={itemList} onHandlerModal={onHandlerModal} />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
