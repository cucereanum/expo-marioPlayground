import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginAnimated from "./app/LoginAnimated";

import {
  useFonts,
  JosefinSlab_100Thin,
  JosefinSlab_100Thin_Italic,
  JosefinSlab_300Light,
  JosefinSlab_300Light_Italic,
  JosefinSlab_400Regular,
  JosefinSlab_400Regular_Italic,
  JosefinSlab_600SemiBold,
  JosefinSlab_600SemiBold_Italic,
  JosefinSlab_700Bold,
  JosefinSlab_700Bold_Italic,
} from "@expo-google-fonts/josefin-slab";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSlab_100Thin,
    JosefinSlab_100Thin_Italic,
    JosefinSlab_300Light,
    JosefinSlab_300Light_Italic,
    JosefinSlab_400Regular,
    JosefinSlab_400Regular_Italic,
    JosefinSlab_600SemiBold,
    JosefinSlab_600SemiBold_Italic,
    JosefinSlab_700Bold,
    JosefinSlab_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <LoginAnimated />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
