import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions
} from 'react-native';

import Card from '../Components/Card';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import MainButton from '../Components/MainButton';
import Colors from '../Constants/Colors';
import TextMgt from '../Components/TextMgt';

StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]);
            return;
        };
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <TextMgt>You selected</TextMgt>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </MainButton>
            </Card>
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TextMgt style={styles.title}>Start a New Game</TextMgt>
                <Card style={styles.inputContainer}>
                    <TextMgt>Select a Number</TextMgt>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.accent}
                            />
                        </View>

                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
    // utilizando a API Dimensions do react-native para descobrir e setar
    // o tamanho dos botões de acordo com o espaço disponível
        width: Dimensions.get('window').width / 4,
    // dividindo o tamanho do botão por 4 para garantir q os dois botões utilizarão metade do espaço já dividido entre os 2 em tela
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.7,
        shadowOffset: {height: 2, width: 2}
        },
    inputContainer: {
        minWidth: 300,
        maxWidth: '95%',
        width: '80%',
        alignItems: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;