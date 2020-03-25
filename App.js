import React from "react";
import { Platform, StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <>
      {Platform.OS === "ios" && <StatusBar barStyle="default"  />}
      <AppNavigator />
    </>
  );
}
