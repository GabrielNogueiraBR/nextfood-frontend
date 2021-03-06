import React from "react";

import { useTheme } from "styled-components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AvailableRestaurants } from "../pages/AvailableRestaurants";
import { Home } from "../pages/Home";
import { Loading } from "../pages/Loading";
import { WelcomePage } from "../pages/WelcomePage";
import { Login } from "../pages/Login";
import { useUser } from "../hooks/useUser";
import { useOrder } from "../hooks/useOrder";
import { QrCodePage } from "../pages/QrCodePage";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface AppRoutesProps {
  isLoading: boolean;
}

export function AppRoutes({ isLoading }: AppRoutesProps) {
  const theme = useTheme();

  const { isLogged } = useUser();
  const { isOpen: isOrderOpen } = useOrder();

  if (isLoading) return <Loading />;

  if (!isLogged) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  if (isLogged && !isOrderOpen) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="available-restaurants"
          component={AvailableRestaurants}
        />
        <Stack.Screen name="qrcode-page" component={QrCodePage} />
      </Stack.Navigator>
    );
  }

  if (isLogged && isOrderOpen) {
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="available-restaurants" component={AvailableRestaurants} />
      <Screen name="home" component={Home} />
    </Navigator>;
  }
}
