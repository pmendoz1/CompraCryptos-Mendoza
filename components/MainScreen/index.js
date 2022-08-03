import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import CustomModal from "../Modal";
import AddItem from "../AddItem";
import List from "../List";
import Balance from "../Balance";
import Navigation from "../Navigation";
import { LinearGradient } from "expo-linear-gradient";
import Portfolio from "../Portfolio";
import Cryptos from "../Cryptos";
import TabNavigator from "../Navigation/TabNavigator";

export default function MainScreen({ navigation }) {
  let objBalance = {
    balanceActual: "3110,65",
    variable24hs: 324,
  };

  let wallets = [
    { id: "BTC", nombre: "Bitcoin", cantidad: 3 },
    { id: "ETH", nombre: "Ethereum", cantidad: 6 },
    { id: "ETC", nombre: "Ethereum Classic", cantidad: 10 },
  ];

  let cryptos = [
    { id: "BTC", nombre: "Bitcoin", precio: 20000 },
    { id: "ETH", nombre: "Ethereum", precio: 1300 },
    { id: "ETC", nombre: "Ethereum Classic", precio: 19 },
  ];

  const [balance, setBalance] = useState(objBalance);

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [balanceDetailVisible, setBalanceDetailVisible] = useState(false);
  const [portfolioItems, setportfolioItems] = useState(wallets);
  const [cryptoItems, setcryptoItems] = useState(cryptos);

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
              balance={balance}
              balanceDetailVisible={balanceDetailVisible}
              onHandlerBalanceDetail={onHandlerBalanceDetail}
              portfolioItems={portfolioItems.length}
            />
            <View style={styles.screen2}>
              <Portfolio
                portfolioItems={portfolioItems}
                navigation={navigation}
              />
            </View>
            <View style={styles.screen2}>
              <Cryptos cryptoItems={cryptoItems} navigation={navigation} />
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
