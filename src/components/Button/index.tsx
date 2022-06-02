import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, StyledButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleColor?: string;
  children?: ReactNode;
}

export function Button({ title, children, titleColor, ...rest }: ButtonProps) {
  return (
    <Container>
      <StyledButton {...rest} activeOpacity={0.7}>
        <Title color={titleColor}>{title}</Title>
      </StyledButton>
      {children}
    </Container>
  );
}
