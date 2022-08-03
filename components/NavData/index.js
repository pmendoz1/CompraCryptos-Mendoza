import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CryptosDetail from "../CryptosDetail";
import PortfolioDetail from "../PortfolioDetail";
import MainScreen from "../MainScreen";

const Stack = createNativeStackNavigator();

const NavData = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mi Portfolio"
        component={PortfolioDetail}
        options={{
          title: "Mi Portfolio",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5F5CFA" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Mercado Crypto"
        component={CryptosDetail}
        options={{
          title: "Mercado Crypto",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#5F5CFA" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default NavData;
