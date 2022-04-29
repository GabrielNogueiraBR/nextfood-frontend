import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createBottomTabNavigator();

import { AvailableRestaurants } from "../pages/AvailableRestaurants";
import { Home } from "../pages/Home";

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="available-restaurants" component={AvailableRestaurants} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
