import React from "react";

import logoDark from "../../assets/icons/logoTextLight.png";
import { Container, Logo } from "./styles";

export function Loading() {
  return (
    <Container>
      <Logo source={logoDark} />
    </Container>
  );
}
