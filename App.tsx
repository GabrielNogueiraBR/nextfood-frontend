import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import theme from "./src/global/styles/theme";

import { Loading } from "./src/pages/Loading";
import { WelcomePage } from "./src/pages/WelcomePage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3 * 1000);
  }, []);

  if (loading || !fontsLoaded)
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );

  if (!logged)
    return (
      <ThemeProvider theme={theme}>
        <WelcomePage />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
