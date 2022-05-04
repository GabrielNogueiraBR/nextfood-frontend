import styled from "styled-components/native";

import LogoLightSVG from "../../assets/icons/logoTextLight.svg";
import LogoDarkSVG from "../../assets/icons/logoTextLight.svg";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
`;

export const CircleBack = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;

  width: ${RFValue(190)}px;
  height: ${RFValue(190)}px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const CircleFront = styled.View`
  position: relative;
  align-items: flex-end;
  justify-content: center;

  width: ${RFValue(148)}px;
  height: ${RFValue(148)}px;
  border-radius: 1000px;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Logo = styled(LogoLightSVG).attrs({
  width: RFValue(128),
  height: RFValue(107),
})``;
