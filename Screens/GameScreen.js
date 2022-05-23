import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
import MainButton from '../Components/MainButton';
import Colors from '../Constants/Colors';
import TextMgt from '../Components/TextMgt';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
        <TextMgt style={styles.listItemText}>Round {numOfRound}</TextMgt>
        <TextMgt style={styles.listItemText}>{value}</TextMgt>
    </View>
);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\' lie!', 'You know that this is wrong...', [{ text: 'Sorry :(', style: 'cancel' }]
            );
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <TextMgt>Opponent's Guess</TextMgt>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name={"md-remove"} size={24} color={'white'} />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')} >
                    <Ionicons name={"md-add"} size={24} color={'white'} />
                </MainButton>
            </Card>
            <Card style={styles.reminderContainer}>
                <TextMgt style={styles.reminderText}> Chosen number: {props.userChoice} </TextMgt>
            </Card>
            <View style={styles.pastGuessesContainer}>
                <ScrollView contentContainerStyle={styles.pastGuessesList}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 1,
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        // Usando a API Dimensions com condicionamento if else pra 
        // setar a distância entre o card e o número acima.
        // Caso a altura da tela do dispositivo tenha mais de 600 pixels, a distância será de 20.   
        // Caso contrário, em aparelhos menores, será 10.
        width: 400,
        maxWidth: "90%"
    },
    pastGuessesContainer: {
        width: '80%',
        flex: 1
    },
    pastGuessesList: {
        flexGrow: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        width: '60%',
        borderColor: Colors.primary,
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: Colors.primaryLight
    },
    listItemText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 3
    },
    reminderContainer: {
        marginBottom: '1%',
        marginTop: '3%'
    },
    reminderText: {
        fontSize: 20,
        color: Colors.primary,
        textShadowColor: '#2b2b2b',
        textShadowRadius: 2
    }
});

export default GameScreen;