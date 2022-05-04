import React, { ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
  children: ReactNode;
}

export function Button({ title, onPress, children, ...rest }: ButtonProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
