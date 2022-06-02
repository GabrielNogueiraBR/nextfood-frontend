import React from "react";

import {
  CategoriesContainer,
  CategoryIcon,
  Container,
  ContentContainer,
  Logo,
  LogoContainer,
  RestaurantName,
  RestaurantPlace,
  ShadowCard,
} from "./styles";

import restaurantImage from "../../assets/img/restaurant.png";
import Category from "../../global/types/Category";
import Restaurant from "../../global/types/Restaurant";

export interface RestaurantCardProps extends Restaurant {}

export function RestaurantCard({
  id,
  name,
  place,
  categories,
}: RestaurantCardProps) {
  return (
    <Container>
      <ShadowCard
        style={{
          elevation: 4,
          shadowOffset: { width: 5, height: 5 },
          shadowColor: "black",
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}
      >
        <LogoContainer>
          <Logo source={restaurantImage} />
        </LogoContainer>
        <ContentContainer>
          <RestaurantName>{name}</RestaurantName>
          <RestaurantPlace>{place}</RestaurantPlace>
          <CategoriesContainer>
            {categories.map((category) => (
              <CategoryIcon id={category.name} name={category.icon} />
            ))}
          </CategoriesContainer>
        </ContentContainer>
      </ShadowCard>
    </Container>
  );
}
