import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  margin-top: ${RFValue(50)}px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ScanContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center; 
`;

export const ScanCodeContainer = styled.View`
  width: ${RFValue(200)}px;
  align-items: center;
  justify-content: center; 
`;

export const ScanBorder = styled.View`
  height: ${RFValue(350)}px;
  width: ${RFValue(350)}px;
  overflow: hidden;
  border-radius: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: #949494;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${RFValue(50)}px;
`;

export const ButtonAccessContainer = styled.View`
  width: ${RFValue(265)}px;
  margin-top: ${RFValue(20)}px;
`;

export const ButtonIcon = styled(FontAwesome5)`
  position: absolute;
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.secondary};
`;