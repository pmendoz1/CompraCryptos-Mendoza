import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import NavData from "./components/NavData";

export default function App() {
  const [loaded] = useFonts({
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    LatoLight: require("./assets/fonts/Lato-Light.ttf"),
    LatoItalic: require("./assets/fonts/Lato-Italic.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <NavData />;
}
