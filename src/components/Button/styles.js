import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({

    button: {
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888888"
    },

    operationButton: {
        color: "#ffffff",
        backgroundColor: "#0E48B4"
    },

    operationButtonDel: {
        fontSize: 40,
        padding: 0,
        paddingTop: 20,
        color: "#ffffff",
        backgroundColor: "#0E48B4"
    },

    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2,
    },

    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3,
    }
});
