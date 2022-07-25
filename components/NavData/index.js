import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CryptosDetail from "../CryptosDetail";
import PortfolioDetail from "../PortfolioDetail";
import MainScreen from "../MainScreen";

const Stack = createNativeStackNavigator();

const NavData = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Mi Portfolio" component={PortfolioDetail} />
        <Stack.Screen name="Mercado Crypto" component={CryptosDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavData;
