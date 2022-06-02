import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import { DataListProps } from ".";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const SearchContainer = styled.View`
  width: 100%;

  margin-top: ${RFValue(36)}px;
  padding-left: ${RFValue(25)}px;
  padding-right: ${RFValue(25)}px;
`;

export const Search = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;

  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(10)}px;
  border-color: ${({ theme }) => theme.colors.secondary};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  margin: 0;
  padding: 0;

  margin-left: ${RFValue(12)}px;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(14)}px;
  padding: ${RFValue(12)}px;

  height: ${RFValue(48)}px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 0;
  padding: 0;
  margin-top: ${RFValue(36)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(26)}px;
  text-align: left;

  margin-left: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Restaurants = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(14)}px;
`;

export const RestaurantList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
})``;
