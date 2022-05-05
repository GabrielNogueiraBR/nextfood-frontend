import React from "react";

import { useTheme } from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AvailableRestaurants } from "../pages/AvailableRestaurants";
import { Home } from "../pages/Home";
import { Loading } from "../pages/Loading";
import { WelcomePage } from "../pages/WelcomePage";
import { Login } from "../pages/Login";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface AppRoutesProps {
  isLoading: boolean;
  isLogged: boolean;
}

export function AppRoutes({ isLoading, isLogged }: AppRoutesProps) {
  const theme = useTheme();

  return isLoading ? (
    <Loading />
  ) : !isLogged ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  ) : (
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
