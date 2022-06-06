import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  ButtonAccessContainer,
  ButtonContainer,
  ButtonIcon,
  Container,
  HeaderContainer,
  ScanBorder,
  ScanCodeContainer,
  ScanContainer,
  SubTitle,
  Title,
} from "./styles";

export function QrCodePage () {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false); 
  const [camActivated, setCamActivated] = useState(true);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status == 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({type, data}: any) => {
    setScanned(true);
    console.log('Type: ' + type + '\nData: ' + data);
  }

  if(hasPermission === null) {
    return(
      <HeaderContainer>
        <Title>Requesting for camera permission</Title>
      </HeaderContainer> 
    )
  }

  if(hasPermission === false) {
    return(
      <HeaderContainer>
        <Title>No access to camera</Title>
        <ButtonAccessContainer>
          <Button title="Allow Camera" onPress={() => askForCameraPermission()}></Button>          
        </ButtonAccessContainer>
      </HeaderContainer> 
    )
  }
  
  return (
    <Container>
      <HeaderContainer>
        <Title>{ camActivated ? "Place the QR code inside the area" : ""}</Title>
        <SubTitle>{ camActivated ? "Scanning will start automatically" : "" }</SubTitle>
      </HeaderContainer>
      <ScanContainer> 
        { camActivated ? 
          <ScanBorder>        
            <Camera 
                onBarCodeScanned={ scanned ? undefined : handleBarCodeScanned }
                style={{ height: 550, width: 450 }} 
              />
          </ScanBorder> : 
          <ScanCodeContainer>
            <Title>Enter the table code</Title>
            <Input placeholder="Code"></Input>
          </ScanCodeContainer> 
        }     
      </ScanContainer>
      <ButtonContainer>
          <ButtonIcon name={ camActivated ? "keyboard" : "camera" } solid onPress={ () => setCamActivated(!camActivated) }/>
      </ButtonContainer>
    </Container>
  );
}
