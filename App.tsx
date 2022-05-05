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
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) setIsLoading(false);
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes isLoading={isLoading} isLogged={isLogged} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
