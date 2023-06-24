import React from "react";
import {Modal, View, Text, TouchableOpacity} from "react-native";
import styles from "./style";
import Input from "../input";

const EditModal = ({
    visible=false, 
    modalText="", 
    setModalText=()=>{}, 
    closeModal=()=>{}, 
    onSave=()=>{},
    hasError=false,
    errorMessage=""
}) => {

    return (
        <Modal animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContentWrapper}>
                    <Text style={styles.title}>Edit</Text>
                    <Input value={modalText} onChangeText={(text)=>setModalText(text)}/>
                    {
                        hasError && (
                            <Text style={styles.validationText}>{errorMessage}</Text>
                        )
                    }
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButtonWrapper}>
                            <Text style={styles.closeButtonText}>CLOSE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSave} style={styles.saveButtonWrapper}>
                            <Text style={styles.saveButtonText}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
};

export default EditModal;