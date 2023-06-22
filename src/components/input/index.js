import React, {useState} from "react";
import {View, TextInput, TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils/constants";
import styles from "./style";

const Input = ({
    placeholder="Type something...", 
    keyboardType="default", 
    multiline=false, 
    hasIcon=false,
    iconName="add-circle",
    onIconPress=()=>{},
    value="",
    onChangeText=()=>{}
    }) => {
    return (
    <View style={styles.wrapper}>
        <TextInput 
            placeholder={placeholder}
            placeholderTextColor={colors.tertiaryColor}
            keyboardType={keyboardType} 
            multiline={multiline} 
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
        />
        {hasIcon && (
            <TouchableOpacity onPress={onIconPress}>
                <Icon name={iconName} style={styles.icon}/>
            </TouchableOpacity>
        )}
        
    </View>
    )
};

export default Input;