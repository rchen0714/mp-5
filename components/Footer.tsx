"use client"

import styled from 'styled-components'

const FooterWrapper = styled.div`
    padding: 3% 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e6f4ff;
`;

const FooterText = styled.h2`
    font-size: calc(5px + 1vw);
    font-family: Poppins, sans-serif;
    font-weight: 400;
`;

export default function Footer() {
    return(
        <FooterWrapper>
            <FooterText>© Ruby Chen. All rights reserved</FooterText>
        </FooterWrapper>
    );
}