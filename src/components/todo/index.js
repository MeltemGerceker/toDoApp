import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./style";
import { colors } from "../../utils/constants";

import Icon from "react-native-vector-icons/AntDesign";

const Todo = ({todo={}}) => {
    return (
        <View style={styles.toDoWrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{todo?.text}</Text>
                <Text style={styles.date}>{new Date(todo?.date).toLocaleDateString("tr-TR")}</Text>
            </View>
            <View style={styles.iconsWrapper}>
                <TouchableOpacity>
                    <Icon name={todo?.completed ? "checkcircle" : "checkcircleo"} size={25} color={colors.checkButtonGreen}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="edit" size={25} color={colors.tertiaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="closecircleo" size={25} color={colors.deleteButtonRed}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Todo;