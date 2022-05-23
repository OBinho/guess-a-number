import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../Constants/Colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback
    }
    
    return (
    <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.7} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
    </View>
    );
};

const styles = StyleSheet.create ({
    buttonContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.7
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontFamily: 'magista',
        fontSize: 18,
        textShadowColor: 'black',
        textShadowRadius: 2
    }
});

export default MainButton;