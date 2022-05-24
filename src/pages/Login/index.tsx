import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

import {
  ButtonContainer,
  Container,
  LoginContainer,
  Logo,
  LogoContainer,
  Title,
} from "./styles";
import { useUser } from "../../hooks/useUser";

export function Login() {
  const navigation = useNavigation();
  const { doLogin } = useUser();

  const handleButtonLogin = () => {
    doLogin();
  };

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginContainer>
        <Title>{"Sign in"}</Title>
        <Input placeholder="Login"></Input>
        <Input secureTextEntry={true} placeholder="Password"></Input>
      </LoginContainer>
      <ButtonContainer>
        <Button title="Login" onPress={handleButtonLogin}></Button>
      </ButtonContainer>
    </Container>
  );
}
