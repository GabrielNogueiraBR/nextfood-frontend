import React from "react";

import { TextInput } from "react-native-gesture-handler";

import { Container, ContentContainer, SearchContainer, Title } from "./styles";

export function AvailableRestaurants() {
  return (
    <Container>
      <SearchContainer>
        <TextInput placeholder="Search" />
      </SearchContainer>
      <ContentContainer>
        <Title>Available restaurants</Title>
      </ContentContainer>
    </Container>
  );
}
