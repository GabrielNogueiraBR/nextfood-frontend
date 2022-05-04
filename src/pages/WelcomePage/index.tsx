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
        <Button title="Let’s start" onPress={() => {}} >
          <ButtonIcon name="chevron-right" />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
