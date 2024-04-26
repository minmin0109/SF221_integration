import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from 'react-native';

const DormBooking = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Dormitory</Text>
            <Text style={styles.subtitle}>หอพัก🏡</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BookBooking')} style={styles.button}>
                    <Text style={styles.buttonText}>บริการ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyBooking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>หอพัก</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 13,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        backgroundColor: '#C3002F',
        height: '1%',
        opacity: 0.3,
    },
    title: {
        marginTop: '15%',
        fontSize: 40,
        padding: 20,
        color: '#C3002F',
    },
    subtitle: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: -10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 11,
        gap: '10%',
    },
    button: {
        borderRadius: 50,
        width: 109,
        height: 26,
        backgroundColor: '#FFDFAE',
    },
    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        paddingVertical: 2.5,
    },
    inactiveButton: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
});

export default DormBooking
