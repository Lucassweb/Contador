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
    background-color: #1f0664;  

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: red;
    }

    span {
        font-size: 70px;
        color: white;
    }
`

export const SecondContent = styled.div`
    display: flex;
    margin-top: 3em;
    justify-content: center;
`

export const Botao = styled.div`
    width: 100px;
    border-radius: 5px;
    padding: 8px;
    color: wheat;
    font-weight: bold;
    background-color: black;
    border: none;
    cursor: pointer;
    margin: 1em;
`