import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Button = ({ onPress, label, double, triple, operation, operationDel }) => {

    const stylesButton = [styles.button];

    if (double) {
        stylesButton.push(styles.buttonDouble);
    }

    if (triple) {
        stylesButton.push(styles.buttonTriple);
    }

    if (operation) {
        stylesButton.push(styles.operationButton);
    }

    if (operationDel) {
        stylesButton.push(styles.operationButtonDel);
    }

    return (
        <TouchableOpacity onPress={() => onPress(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableOpacity>
    );
}
