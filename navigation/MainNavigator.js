import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/main/HomeScreen";
import Detail from "../screens/main/DetailScreen";

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
