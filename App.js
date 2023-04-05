import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from './src/components/Button';
import { Display } from './src/components/Display';
import { styles } from './styles';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const calculator = () => {
    const splitNumbers = currentNumber.split(' ');
    const fistNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString());
        return;
      case '*':
        setCurrentNumber((fistNumber * lastNumber).toString());
        return;
      case '/':
        setCurrentNumber((fistNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {

    console.log(buttonPressed);
    if (buttonPressed === '+' || buttonPressed === "*" || buttonPressed === "/") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'AC':
        setLastNumber("");
        setCurrentNumber("");
        return;
      case '=':
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
      case '+/-':
        setCurrentNumber(currentNumber.charAt(0) === '-' ? currentNumber.slice(1) : '-' + currentNumber);
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={styles.container}>
      <Display
        historyText={lastNumber}
        resultText={currentNumber.trim() !== '' ? (currentNumber.replace(/^0+/, '') || '0') : '0'}
      />

      <View style={styles.buttons}>

        <Button label={'AC'} onPress={() => handleInput('AC')} operation />
        <Button label={'DEL'} onPress={() => handleInput('DEL')} operationDel />
        <Button label={'+/-'} onPress={() => handleInput('+/-')} operation />
        <Button label={'/'} onPress={() => handleInput('/')} operation />
        <Button label={'7'} onPress={() => handleInput(7)} />
        <Button label={'8'} onPress={() => handleInput(8)} />
        <Button label={'9'} onPress={() => handleInput(9)} />
        <Button label={'*'} onPress={() => handleInput('*')} operation />
        <Button label={'4'} onPress={() => handleInput(4)} />
        <Button label={'5'} onPress={() => handleInput(5)} />
        <Button label={'6'} onPress={() => handleInput(6)} />
        <Button label={'-'} onPress={() => handleInput('-')} operation />
        <Button label={'1'} onPress={() => handleInput(1)} />
        <Button label={'2'} onPress={() => handleInput(2)} />
        <Button label={'3'} onPress={() => handleInput(3)} />
        <Button label={'+'} onPress={() => handleInput('+')} operation />
        <Button label={'0'} onPress={() => handleInput(0)} double />
        <Button label={'.'} onPress={() => handleInput('.')} />
        {/* <Button label={'+/-'} onPress={() => handleInput('+/-')} operation /> */}
        <Button label={'='} onPress={() => handleInput('=')} operation />
      </View>
    </View>
  );
}
