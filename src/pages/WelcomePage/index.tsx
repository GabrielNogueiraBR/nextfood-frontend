import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Button } from "../../components/Button";

import {
  ButtonContainer,
  ButtonIcon,
  CircleBack,
  CircleFront,
  Container,
  Greetings,
  GreetingsContainer,
  Logo,
  LogoContainer,
  Title,
} from "./styles";

export function WelcomePage() {
  const navigation = useNavigation();

  const handleButtonLetsStart = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <Container>
      <LogoContainer>
        <CircleBack>
          <CircleFront>
            <Logo />
          </CircleFront>
        </CircleBack>
      </LogoContainer>
      <GreetingsContainer>
        <Title>{"Find and Get \nYour Best Food"}</Title>
        <Greetings>
          {
            "Find the most delicious food \nwith the best quality and free delivery here"
          }
        </Greetings>
      </GreetingsContainer>
      <ButtonContainer>
        <Button title="Let’s start" onPress={handleButtonLetsStart}>
          <ButtonIcon name="chevron-right" />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
