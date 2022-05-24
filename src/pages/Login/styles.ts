import styled from "styled-components/native";
import LogoSVG from "../../assets/icons/logoDark.svg";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`

export const LogoContainer = styled.View`
  margin-top: ${RFValue(56)}px;
`;

export const LoginContainer = styled.View`
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: ${RFValue(265)}px;
`;

export const Logo = styled(LogoSVG).attrs({
  width: RFValue(222),
  height: RFValue(184.07),
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: left;
`;