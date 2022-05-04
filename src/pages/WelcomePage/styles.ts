import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSVG from "../../assets/icons/logoTextDark.svg";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoContainer = styled.View`
  margin-top: ${RFValue(97)}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleBack = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;

  width: ${RFValue(277)}px;
  height: ${RFValue(277)}px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const CircleFront = styled.View`
  position: relative;
  align-items: flex-end;
  justify-content: center;

  width: ${RFValue(217)}px;
  height: ${RFValue(217)}px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Logo = styled(LogoSVG).attrs({
  width: RFValue(199),
  height: RFValue(165),
})``;

export const GreetingsContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${RFValue(75)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: left;
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: left;
`;

export const ButtonContainer = styled.View`
  width: ${RFValue(265)}px;
  margin-bottom: ${RFValue(75)}px;
`;

export const ButtonIcon = styled(Feather)`
  position: absolute;
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.primary};
  right: ${RFValue(14)}px;
`;
