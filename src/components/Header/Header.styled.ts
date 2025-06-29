import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100vw;
    height: 54px;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
`;

export const HeaderLogoContainer = styled.div`
    height: 26px;
    width: 26px;
    margin-left: 10px;
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

export const HeaderTextLogoContainer = styled.div`
    font-size: 22px;
    color: white;
    margin-left: 10px;
    font-weight: 400;
`