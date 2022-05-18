import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

export const StyledInput = styled.TextInput`
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(45)}px;
  width: ${RFValue(300)}px;
  padding: ${RFValue(12)}px;
  margin: ${RFValue(6)}px;
  font-size: ${RFValue(14)}px;
  border-color: ${({ theme }) => theme.colors.secondary };
`;
