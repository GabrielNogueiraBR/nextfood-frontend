import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components"

import theme from "./src/global/theme";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App(){

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
    )
}