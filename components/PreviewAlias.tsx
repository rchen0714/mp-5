"use client"

import { AliasProp } from "@/types/types";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:  auto;
    background-color: #e6f4ff;
`;

const StyledBorder = styled.div`
    border: 2px solid cornflowerblue;
    padding: 3%;
    text-align: center;
    align-items: center;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const AliasLink = styled.a`
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

export default function AliasPreview({ aliasEntry }: { aliasEntry: AliasProp }) {
    const fullLink = `${window.location.origin}/${aliasEntry.alias}`;

    return (
        <StyledDiv>
            <StyledBorder>
                <TextWrapper>
                    <h4>Alias: {aliasEntry.alias}</h4>
                    <p>Click the link below to go to your new URL:</p>
                    <AliasLink href={fullLink} target="_blank" rel="noopener noreferrer">
                        {fullLink}
                    </AliasLink>
                </TextWrapper>
            </StyledBorder>
        </StyledDiv>
    );
}
