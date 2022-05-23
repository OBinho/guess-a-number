import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../Constants/Colors';

const Header = props => {
    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {props.title}
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: '5%',
        paddingBottom: '2%',
        backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 10
    },
    headerTitle: {
        width: '80%',
        textAlign: 'center',
        color: Platform.OS === 'android' ? 'white' : Colors.primary,
        fontSize: 24,
        textShadowRadius: 5,
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 1},
        fontFamily: 'magista'
    }
});

export default Header;