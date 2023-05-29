import styled from "styled-components"

export const Content = styled.div`
    max-width: 940px;
    margin: auto;
    margin-top: 10em;
    width: 400px;
    height: 30vh;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: purple;
    }
`

export const SecondContent = styled.div`
    display: flex;
    margin-top: 10em;
    justify-content: center;
    justify-content: space-around;
`

export const Botao = styled.button`
    width: 120px;
    border-radius: 5px;
    padding: 10px;
    color: purple;
    font-weight: bold;
    background-color: #c2d1e6;
    border: none;
    cursor: pointer;
`