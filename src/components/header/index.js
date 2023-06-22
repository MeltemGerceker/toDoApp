import React from "react";
import {View, Text} from "react-native";
import styles from "./style";
import { colors } from "../../utils/constants";
import Icon from 'react-native-vector-icons/Foundation';

const Header = ({title=""}) => {
    return (
        <View style={styles.headerWrapper}>
            <Icon name="clipboard-notes" size={30} color={colors.tertiaryColor}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

export default Header;