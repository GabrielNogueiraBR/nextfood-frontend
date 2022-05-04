import React, { useEffect, useState } from "react";

import { CircleBack, CircleFront, Container, Logo } from "./styles";

export function Loading() {
  return (
    <Container>
      <CircleBack>
        <CircleFront>
          <Logo />
        </CircleFront>
      </CircleBack>
    </Container>
  );
}
