import React from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from "./style";
import { colors } from "../../utils/constants";

import Icon from "react-native-vector-icons/AntDesign";

const Todo = ({todo={}, todos=[], setTodos=()=>{}}) => {
    
    const deleteTodo = () => {
        Alert.alert("ALERT!", 
            `Are you sure you want to delete "${todo?.text}" ?`,
            [
                {
                    text: "DELETE",
                    style: "destructive",
                    onPress: () => {
                        const filteredTodos = todos?.filter(item => item?.id !== todo?.id);
                        setTodos(filteredTodos);
                    }
                },
                {
                    text: "CANCEL",
                    style: "cancel"
                },
            ]);
    };

    const toggleCompleted = () => {
        let tempTodos = [];
        const changedTodo = {
            ...todo,
            completed: !todo.completed,
            deneme: 0
        };
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id)
                tempTodos.push(todos[i]);
            else
                tempTodos.push(changedTodo);
        }
        //console.log(tempTodos);
        setTodos(tempTodos);
        /*
        Alert.alert("COMPLETE!", "Are you sure you want to change this To Do's status?",
        [
            {
                text: "OK",
                style: "default",
                onPress: () => {
                    let tempTodos = [];
                    const changedTodo = {
                        ...todo, 
                        completed: !todo.completed,
                        deneme: 0
                    };
                    for (let i = 0; i < todos.length; i++) {
                        if (todos[i].id !== todo.id)
                            tempTodos.push(todos[i]);
                        else
                            tempTodos.push(changedTodo);
                    }
                    setTodos(tempTodos);
                }
            },
            {
                text: "CANCEL",
                style: "cancel"
            },
        ])
        */
    };

    return (
        <View style={styles.toDoWrapper}>
            <View style={styles.textWrapper}>
                <Text style={[styles.title, todo?.completed && styles.completedTitle]}>{todo?.text}</Text>
                <Text style={styles.date}>{new Date(todo?.date).toLocaleDateString("tr-TR")}</Text>
            </View>
            <View style={styles.iconsWrapper}>
                <TouchableOpacity onPress={toggleCompleted}>
                    <Icon name={todo?.completed ? "checkcircle" : "checkcircleo"} size={25} color={colors.checkButtonGreen}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="edit" size={25} color={colors.tertiaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteTodo}>
                    <Icon name="closecircleo" size={25} color={colors.deleteButtonRed}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Todo;