import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
    toDoWrapper: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryColor,
        flexDirection: "row",
        alignItems: "center"
    },
    textWrapper: {
        flex: 1
    },
    iconsWrapper: {
        flexDirection: "row",
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.primaryColor
    },
    completedTitle: {
        color: colors.deleteButtonRed,
        textDecorationLine: "line-through"
    },
    date: {
        color: colors.secondaryColor,
        fontSize: 14,
        marginTop: 10
    }
});

export default styles;