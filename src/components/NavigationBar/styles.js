import styled from "styled-components";
import Button from '@mui/material/Button';

export const NavBar = styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    color: green;
    background-color: black;
    justify-content: flex-start;
`;

export const Content = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2vw 0 2vw;
`;


export const ButtonHome = styled(Button)`
    color: green;
    background-color: transparent;
    border: none;
    text-decoration: none;
`;

export const ModesContainer = styled.div`
    display: flex;
    gap: 1vw;
`;

export const DivHome = styled.div`
    display: flex;
    width: auto;
`

export const ButtonNav = styled.a`
    color: green;
    background-color: transparent;
    border: none;
    text-decoration: none;
`
