import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: ${RFValue(8)}px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};

  padding: ${RFValue(17)}px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21)}px;

  color: ${({ theme }) => theme.colors.primary};
`;
