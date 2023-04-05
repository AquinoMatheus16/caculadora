import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    dispaly: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "rgba(38, 37, 37, 0.6)",
        alignItems: "flex-end"
    },

    results: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    displayValue: {
        fontSize: 60,
        color: "#fff"
    },

    historyText: {
        color: "#7c7c7c",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },

    resultText: {
        color: "#282F38",
        margin: 10,
        fontSize: 40
    }
});
