import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";

import {
  RestaurantCard,
  RestaurantCardProps,
} from "../../components/RestaurantCard";
import theme from "../../global/styles/theme";

import Restaurant from "../../global/types/Restaurant";

import {
  ButtonContainer,
  ButtonIcon,
  Container,
  ContentContainer,
  Icon,
  Input,
  RestaurantList,
  Restaurants,
  Search,
  SearchContainer,
  Title,
} from "./styles";

export interface DataListProps extends RestaurantCardProps {
  id: string;
}

export function AvailableRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(
    [] as Restaurant[]
  );

  useEffect(() => {
    setRestaurants([
      {
        id: "12345",
        name: "Restaurant Name 1",
        place: "Place",
        categories: [
          { id: "1", name: "burger", icon: "hamburger", active: true },
          { id: "2", name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "6789",
        name: "Restaurant Name 2",
        place: "Place",
        categories: [
          { id: "3", name: "burger", icon: "hamburger", active: true },
        ],
      },
      {
        id: "101112",
        name: "Restaurant Name 3",
        place: "Place",
        categories: [
          { id: "4", name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "131415",
        name: "Restaurant Name 4",
        place: "Place",
        categories: [
          { id: "5", name: "burger", icon: "hamburger", active: true },
          { id: "6", name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "161718",
        name: "Restaurant Name 5",
        place: "Place",
        categories: [
          { id: "7", name: "burger", icon: "hamburger", active: true },
          { id: "8", name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "192021",
        name: "Restaurant Name 6",
        place: "Place",
        categories: [
          { id: "9", name: "burger", icon: "hamburger", active: true },
          { id: "10", name: "burger", icon: "pizza-slice", active: true },
        ],
      },
    ]);
  }, []);

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
        <Restaurants>
          <RestaurantList
            data={restaurants}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({ item }) => (
              <RestaurantCard
                id={item.id}
                name={item.name}
                place={item.place}
                categories={item.categories}
                key={item.id}
              />
            )}
          />
        </Restaurants>
      </ContentContainer>
      <ButtonContainer>
        <Button title="Start Order" titleColor={theme.colors.shape}>
          <ButtonIcon name="qrcode" />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
