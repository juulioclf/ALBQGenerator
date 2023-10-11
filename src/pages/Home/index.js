import React from "react";
import { ActionArea, Container, Description, TextArea, Title } from "./styles";
import { Button } from "@mui/material";


export default function Home() {
  return (
    <Container> 
      <TextArea>
        <Title>Bem-vindo ao ALBQ Generator</Title>
        <Description>No momento, temos dois modos de sorteios</Description>
        <Description>- Lider: escolha dois líderes (aleatoriamente ou não) e monte seu time</Description>
        <Description>- Todos Aleatorios: o próprio nome já é o suficiente...</Description>
      </TextArea>

      <ActionArea>
      <Button variant="contained" href="/lider">Modo Líder</Button>
      <Button variant="contained" href="/aleatorios">Todos Aleatorios</Button>
      </ActionArea>
      
    </Container>
  );
}


