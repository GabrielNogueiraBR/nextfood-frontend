import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import theme from "./src/global/styles/theme";

import { Loading } from "./src/pages/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 5 * 1000);
  }, []);

  if (loading)
    return (
      <ThemeProvider theme={theme}>
        <Loading />
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
