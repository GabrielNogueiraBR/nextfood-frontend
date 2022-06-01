import React from "react";

import { TextInput } from "react-native-gesture-handler";

import {
  Container,
  ContentContainer,
  Icon,
  Input,
  Search,
  SearchContainer,
  Title,
} from "./styles";

export function AvailableRestaurants() {
  return (
    <Container>
      <SearchContainer>
        <Search>
          <Icon name="search" />
          <Input placeholder="Search" />
        </Search>
      </SearchContainer>
      <ContentContainer>
        <Title>Available restaurants</Title>
      </ContentContainer>
    </Container>
  );
}
