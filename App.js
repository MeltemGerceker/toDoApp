/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import Header from './src/components/header';
import Input from './src/components/input';
import Todo from './src/components/todo';
import generalStyles from './src/utils/generalStyles';
import { colors } from './src/utils/constants';


function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if (text === "")
      return;
      
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title="My To Do App"/>
      <Input 
        hasIcon 
        iconName="add-circle" 
        value={text} 
        onChangeText={(text)=>setText(text)} 
        onIconPress={addToDo}
      />

      <View style={styles.todosWrapper}>
        {
          todos.length === 0 ? (
            <Text style={styles.emptyText}>Your To Do List is empty.</Text>
          ) : (

            <ScrollView style={styles.scrollView}>
              {
                todos?.map((item) => (<Todo key={item?.id} todo={item} todos={todos} setTodos={setTodos}/>))
              }
            </ScrollView>
          )
        }
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primaryColor
  },
  scrollView: {
    flexGrow: 1
  }
});

export default App;
