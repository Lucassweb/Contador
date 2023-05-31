import { useState } from 'react';
import { Content, SecondContent, Botao } from './style'

export const Container = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);    
    }
    
    const handleMenos = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <Content>
            <h1>CONTADOR</h1>
            <span>{count}</span>
            <SecondContent>
                <Botao onClick={handleAdd}>ADICIONAR</Botao>
                <Botao onClick={handleMenos}>DIMINUIR</Botao>
            </SecondContent>
        </Content>
    )
}