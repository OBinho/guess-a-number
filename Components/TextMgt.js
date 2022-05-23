import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextMgt = props => 
    <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
;

const styles = StyleSheet.create ({
    text: {
        fontFamily: 'magista',
        fontSize: 16
    }
});

export default TextMgt;