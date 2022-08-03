import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Profile";
import NavData from "../NavData";
import Cart from "../Cart";
import { AntDesign } from "@expo/vector-icons";

const BottomsTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomsTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomsTabs.Screen
        name="Home"
        component={NavData}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? "blue" : "black"}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <BottomsTabs.Screen
        name="Mi Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="profile"
                size={24}
                color={focused ? "blue" : "black"}
              />
              <Text>Mi Perfil</Text>
            </View>
          ),
        }}
      />
      <BottomsTabs.Screen
        name="Carrito"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? "blue" : "black"}
              />
              <Text>Mi Carrito</Text>
            </View>
          ),
        }}
      />
    </BottomsTabs.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: "7%",
    backgroundColor: "#FCE2DB",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
