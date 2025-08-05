"use client"

import { useState } from 'react'
import styled from 'styled-components'
import {Button, TextField, Paper, FormHelperText} from "@mui/material";
import createNewAlias from '@/lib/createNewAlias';
import { AliasProp } from '@/types/types'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5% 0;
    background-color: #e6f4ff;
    
    @media (max-width: 1000px) {
        height: 80vh;
    }

    @media (max-width: 700px) {
        height: 100vh;
    }
`;

const StyledCard = styled(Paper)`
    width: 80vw;
    padding: 5%;
    margin: auto;
    background-color: white; 
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        padding: 10% 5%;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 3%;
    font-size: calc(5px + 1vw);
    font-weight: bold;
    text-align: center;
`;

const StyledSubtext = styled.p`
    font-size: calc(5px + 1vw);
    margin-bottom: 5%;
    font-family: Poppins, sans-serif;
    text-align: center;
`;

export default function NewAliasForm({ appendAction }: { appendAction: (alias: AliasProp) => void }) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newAlias = await createNewAlias(alias, url);
            appendAction(newAlias);
            setUrl("");
            setAlias("");
            setError("");
        } catch (error: unknown){
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <StyledWrapper>
            <StyledCard elevation={3}>
                <StyledSubtext>
                    Enter a long URL and choose a custom alias to create a shortened link.
                    Then click your new generated link and have it lead to your URL.
                </StyledSubtext>
                <StyledForm onSubmit={handleSubmit}>
                    <TextField
                        variant="filled"
                        label="Enter URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        variant="filled"
                        label="Enter an alias"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        fullWidth
                    />
                    <FormHelperText>Enter a custom alias (must be unique)</FormHelperText>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!url || !alias}
                        fullWidth
                    >
                        Shorten!
                    </Button>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </StyledForm>
            </StyledCard>
        </StyledWrapper>
    );
}

