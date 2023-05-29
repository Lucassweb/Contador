import {Content, SecondContent, Botao} from './style'
export const Container = () => {
    return (
        <Content>
            <h1>CONTADOR</h1>
            <SecondContent>
                <Botao>DIMINUI</Botao>
                <Botao>RESET</Botao>
                <Botao>ADICIONAR</Botao>
            </SecondContent>
        </Content>
    )
}