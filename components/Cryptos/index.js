import React from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCrypto } from "../../store/actions/ArrayCryptos.action";

export default function Cryptos(props) {
  const cryptoItems = useSelector((state) => state.arrayCryptos.arrayCryptos);
  const dispatch = useDispatch();
  const { navigation } = props;

  return (
    <>
      <View>
        <Text style={styles.title}>Mercado Crypto</Text>
      </View>
      <FlatList
        horizontal={true}
        data={cryptoItems}
        renderItem={(data) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              dispatch(selectCrypto(data.item.id));
              navigation.navigate("Mercado Crypto");
            }}
          >
            <Text style={styles.text}>{data.item.nombre}</Text>
            <Text style={styles.text}>Precio: ${data.item.precio}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    padding: 5,
    justifyContent: "space-evenly",
    backgroundColor: "#5F5CFA",
    alignItems: "flex-start",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
    marginRight: 5,
    marginTop: 5,
    width: 150,
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
    fontFamily: "LatoRegular",
  },
  text: {
    color: "#FBFEFF",
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "LatoRegular",
  },
});
