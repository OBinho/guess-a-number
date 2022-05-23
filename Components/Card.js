import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../Constants/Colors';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
)};

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        backgroundColor: Colors.backgroundLight,
        elevation: 10,
        padding: 15,
        borderRadius: 10
    }
});

export default Card;