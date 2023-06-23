import React, {useState} from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from "./style";
import { colors } from "../../utils/constants";

import Icon from "react-native-vector-icons/AntDesign";
import EditModal from '../editModal';

const Todo = ({todo={}, todos=[], setTodos=()=>{}}) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState(todo?.text);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
            completed: !todo.completed
        };
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id)
                tempTodos.push(todos[i]);
            else
                tempTodos.push(changedTodo);
        }
        //console.log(tempTodos);
        setTodos(tempTodos);
    };

    const editTodo = () => {
        if (modalText === "") { // Validation
            setHasError(true);
            setErrorMessage("The text cannot be empty string.");

            setTimeout(() => {
                setHasError(false);
                setErrorMessage("");
            }, 2000);
            return;
        }

        setHasError(false);
        setErrorMessage("");

        let tempTodos = [];
        const changedTodo = {
            ...todo,
            text: modalText
        };
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id)
                tempTodos.push(todos[i]);
            else
                tempTodos.push(changedTodo);
        }
        setTodos(tempTodos);
        setOpenModal(false);
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
                <TouchableOpacity onPress={()=>{setOpenModal(true)}}>
                    <Icon name="edit" size={25} color={colors.tertiaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteTodo}>
                    <Icon name="closecircleo" size={25} color={colors.deleteButtonRed}/>
                </TouchableOpacity>
            </View>
            <EditModal 
                visible={openModal} 
                modalText={modalText} 
                setModalText={setModalText} 
                closeModal={() => {setOpenModal(false)}}
                onSave={editTodo}
                hasError={hasError}
                errorMessage={errorMessage}
            />
        </View>
    )
}

export default Todo;