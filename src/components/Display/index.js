import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Display = ({ value, historyText, resultText }) => {

    return (
        <View style={styles.results}>
            <Text style={styles.historyText} numberOfLines={1}>
                {historyText}
            </Text>
            <Text style={styles.resultText} numberOfLines={1}>
                {resultText}
            </Text>
        </View>
        // <View style={styles.dispaly}>
        //     <Text style={styles.displayValue} numberOfLines={1}>
        //         {value}
        //     </Text>
        // </View>
    );
}
