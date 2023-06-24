import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: colors.bgDisabled,
        justifyContent: "center",
        alignItems: "center"
    },
    modalContentWrapper: {
        backgroundColor: colors.backgroundColor,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        borderRadius: 5
    },
    title: {
        width: "100%",
        color: colors.primaryColor,
        backgroundColor: colors.tertiaryColor,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryColor,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    validationText: {
        color: colors.deleteButtonRed
    },
    buttonsWrapper: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    },
    closeButtonWrapper: {
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        paddingHorizontal: 10,
        paddingVertical: 5
    }, 
    closeButtonText: {
        color: colors.secondaryColor,
        fontSize: 16,
        fontWeight: "bold"
    }, 
    saveButtonWrapper: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.primaryColor
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default styles;