import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, StyledButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  children: ReactNode;
}

export function Button({ title, children, ...rest }: ButtonProps) {
  return (
    <Container>
      <StyledButton {...rest} activeOpacity={0.7}>
        <Title>{title}</Title>
      </StyledButton>
      {children}
    </Container>
  );
}
