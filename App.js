import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainNavigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    LatoLight: require("./assets/fonts/Lato-Light.ttf"),
    LatoItalic: require("./assets/fonts/Lato-Italic.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
