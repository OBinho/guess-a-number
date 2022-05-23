import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />

//vamo lá...
// {...props} - usando spread para trazer e utilizar as props setadas no componente pai. Possibilitando o uso de comandos como "keyboardType" por exemplo.

// {{ ... styles.input, ...props.style }} - fazendo uso de spread para declarar o estilo do componente com o stylesheet local e substituir/adicionar 
// propriedades adicionais através dos valores setados no stylesheet do componente pai.

};

const styles = StyleSheet.create ({
    input: {
        height: 35,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 15
    }
});

export default Input;