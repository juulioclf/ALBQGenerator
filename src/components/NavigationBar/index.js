import React, { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { ButtonHome, ButtonNav, Content, DivHome, ModesContainer, NavBar } from "./styles";


function NavigationBar() {

  const pages = [{id: 1, name: 'Modo Líder', action: "lider"}, {id: 2, name: 'Todos Aleatórios', action: "aleatorios"}];

  return (
    <NavBar>
        <Content>

          <ButtonHome sx={{color: "green"}}startIcon={<HomeIcon />} href="/">
            ALBQ Generator

          </ButtonHome>

          <ModesContainer>
            {pages.map((page) => (
              <ButtonNav
              key={page.id}
              href={page.action}           
            >
              {page.name}
            </ButtonNav>
            ))}
          </ModesContainer>
        </Content>
    </NavBar>
  );
}
export default NavigationBar;