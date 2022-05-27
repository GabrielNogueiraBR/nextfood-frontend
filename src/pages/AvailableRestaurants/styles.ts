import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const SearchContainer = styled.View`
  padding: ${RFValue(12)}px;
  font-size: ${RFValue(14)}px;

  width: ${RFValue(327)}px;
  height: ${RFValue(48)}px;

  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(10)}px;
  border-color: ${({ theme }) => theme.colors.secondary};

  margin-top: ${RFValue(36)}px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  margin-top: ${RFValue(36)}px;
  margin-left: ${RFValue(23)}px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: left;
`;
