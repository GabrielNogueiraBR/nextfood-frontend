import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import { FlatList, TextInput } from "react-native-gesture-handler";
import {
  RestaurantCard,
  RestaurantCardProps,
} from "../../components/RestaurantCard";

import Restaurant from "../../global/types/Restaurant";

import {
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
          { name: "burger", icon: "hamburger", active: true },
          { name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "6789",
        name: "Restaurant Name 2",
        place: "Place",
        categories: [{ name: "burger", icon: "hamburger", active: true }],
      },
      {
        id: "101112",
        name: "Restaurant Name 3",
        place: "Place",
        categories: [{ name: "burger", icon: "pizza-slice", active: true }],
      },
      {
        id: "131415",
        name: "Restaurant Name 4",
        place: "Place",
        categories: [
          { name: "burger", icon: "hamburger", active: true },
          { name: "burger", icon: "pizza-slice", active: true },
        ],
      },
      {
        id: "161718",
        name: "Restaurant Name 5",
        place: "Place",
        categories: [
          { name: "burger", icon: "hamburger", active: true },
          { name: "burger", icon: "pizza-slice", active: true },
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
              />
            )}
          />
        </Restaurants>
      </ContentContainer>
    </Container>
  );
}
