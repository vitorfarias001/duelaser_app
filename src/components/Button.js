import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03a9e5',
        margin: 50,
        padding: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
    }
})

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity> 
    )
}