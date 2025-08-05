"use client"

import styled from 'styled-components'

const HeaderWrapper = styled.div`
    padding-top: 3%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e6f4ff;
`;

const HeaderTitle = styled.h1`
    font-size: calc(10px + 2vw);
    font-family: Poppins, sans-serif;
    margin-bottom: 1%;
`;

const HeaderSubtitle = styled.h2`
    font-size: calc(5px + 1vw);
    font-family: Poppins, sans-serif;
    font-weight: 400;
`;

export default function Header() {
    return(
        <HeaderWrapper>
            <HeaderTitle>URL Shortener</HeaderTitle>
            <HeaderSubtitle>A webapp that shortens an input URL into an alias</HeaderSubtitle>
        </HeaderWrapper>
    );
}