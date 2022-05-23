import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native';

import Card from '../Components/Card';
import MainButton from '../Components/MainButton';
import Colors from '../Constants/Colors';
import TextMgt from '../Components/TextMgt';

const GameOverScreen = props => {
    return (
        <ScrollView style={{backgroundColor: Colors.background}}>
            <View style={styles.screen}>
                <Card style={styles.card}>
                    <TextMgt style={styles.title}>Game Over</TextMgt>
                    <Image source={require('../assets/Images/appface.png')} style={styles.image} resizeMode='contain' />
                    <TextMgt style={styles.highlightedText}>The app is happy {"\n"} he guessed right =3</TextMgt>
                    <View style={styles.summaryContainer}>
                        <TextMgt style={styles.summaryText}>Number of rounds: <Text style={styles.highlightedText}>{props.roundsNumber}</Text></TextMgt>
                        <TextMgt style={styles.summaryText}>The number was <Text style={styles.highlightedText}>{props.userNumber}.</Text></TextMgt>
                    </View>
                    <MainButton onPress={props.onRestart}>
                        Play Again
                    </MainButton>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: '20%',
        padding: '5%',
        paddingBottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    title: {
        textAlign: 'center',
        width: 250,
        fontSize: Dimensions.get('window').height < 400 ? 22 : 40,
        color: 'black',
        textShadowColor: 'black',
        textShadowOffset: { width: 6, height: 3 },
        textShadowRadius: 20,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    summaryContainer: {
        marginBottom: 30,
        marginTop: 15
    },
    summaryText: {
        textAlign: 'center',
        color: Colors.primary,
        fontSize: 14
    },
    image: {
        maxHeight: Dimensions.get('window').width * 0.6,
        maxWidth: Dimensions.get('window').width * 0.58
    },
    highlightedText: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.primaryLight
    }
});

export default GameOverScreen;