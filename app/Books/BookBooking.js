import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import BookList from './BookList';

const BookBooking = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Book📕本</Text>
            <Text style={styles.subtitle}>ยืมหนังสือ</Text>

            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder="Search for book" />
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BookBooking')} style={styles.button}>
                    <Text style={styles.buttonText}>Book Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyBooking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>My Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('BookTracking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>Book Tracking</Text>
                </TouchableOpacity>
            </View>

            {/* Recommended Books */}
            <View style={styles.recommendedContainer}>
                <Text style={styles.recommendedTitle}>Recommended Books</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.recommendedScroll}>
                    <BookList />
                </ScrollView>
            </View>

            {/* Best Selling Books */}
            <View style={styles.bestSellingContainer}>
                <Text style={styles.bestSellingTitle}>Best Selling Books</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.recommendedScroll}>
                    <BookList />
                </ScrollView>
            </View>
        </ScrollView>
    );
};

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
    searchContainer: {
        position: 'relative',
        marginTop: 15,
        marginLeft: 10,
    },
    input: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 20,
        padding: 12,
        paddingLeft: 19,
        marginBottom: 11,
        width: '95%',
    },
    searchButton: {
        position: 'absolute',
        top: 10,
        right: 40,
    },
    searchIcon: {
        width: 20,
        height: 20,
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
        paddingVertical: 5,
    },
    inactiveButton: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    recommendedContainer: {
        borderRadius: 20,
        margin: 15,
        backgroundColor: 'rgba(254, 186, 0, 1)',
        paddingBottom: 25,
        width: 'auto',
        height: 'auto',
    },
    recommendedTitle: {
        marginLeft: 14,
        paddingTop: 16,
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 24.67,
        letterSpacing: 0.40,
    },
    recommendedScroll: {
        flexDirection: 'row',
        marginLeft: 14,
        marginTop: 20,
    },
    bestSellingContainer: {
        marginTop: 21,
        margin: 15,
        paddingBottom: 25,
        width: 'auto',
        height: 'auto',
    },
    bestSellingTitle: {
        fontSize: 20,
        paddingLeft: 5,
    },
    bestSellingBooks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default BookBooking;
