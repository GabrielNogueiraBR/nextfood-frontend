import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
`;

export const ShadowCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: ${RFValue(8)}px ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
`;

export const LogoContainer = styled.View`
  padding: ${RFValue(3)}px ${RFValue(14)}px;
`;

export const Logo = styled.Image`
  max-width: ${RFValue(65)}px;
  max-height: ${RFValue(65)}px;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;
  margin-left: ${RFValue(8)}px;
`;

export const RestaurantName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;

  margin: 0;
  padding: 0;
`;

export const RestaurantPlace = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  margin-top: ${RFValue(-3)}px;
`;

export const CategoriesContainer = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CategoryIcon = styled(FontAwesome5)`
  font-size: ${RFValue(15)}px;
  margin-right: ${RFValue(6)}px;

  color: ${({ theme }) => theme.colors.primary};
`;
