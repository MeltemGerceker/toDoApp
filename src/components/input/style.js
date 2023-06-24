import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({

    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10
    },
    textInput: {
        color: colors.primaryColor,
        fontSize: 16,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    icon: {
        fontSize: 30,
        marginLeft: 10,
        color: colors.secondaryColor
    }
});

export default styles;