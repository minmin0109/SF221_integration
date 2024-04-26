import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import MyBookList from '../Books/MyBookList';
import React, { useState, useEffect } from 'react';


const MyBooking = ({ navigation }) => {
    //getId method
const PracticeGetId = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
        fetchData4();
    }, []);
  
    const fetchData4 = async () => {
      try {
        const response = await fetch(`http://localhost:3000/book-booking/booking-list/${studentId}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return (
      <View>
        <Text>{data ? JSON.stringify({student_id : data[0]['student_id'], book_id : data[0]['book_id'],
         booking_date : data[0]['booking_date'] , status : data[0]['status'] , return_date : data[0]['return_date']  }) : 'Loading...'}</Text>
      </View>
    );
  };
  PracticeGetId(studentId);
  

  const PracticePost = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData2();
    }, [data]);
  
    const fetchData2 = async () => {
      try {
        const response = await fetch('http://localhost:3000/book-booking/book-booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            student_id: data[0]['student_id'],
            book_id: data[0]['book_id'],
            booking_date: data[0]['booking_date'],
            status: data[0]['status'],
            return_date: data[0]['return_date']
          }),
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <View>
        <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
      </View>
    );
  };
  PracticePost();

  //put method
const PracticePut = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData2();
    }, []);
  
    const fetchData2 = async () => {
      try {
        const response = await fetch(`http://localhost:3000/book-booking/update/${studentId}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ student: data[0]['student'] , status : data[0]['status'] , book_id : data[0]['book_id'] }), 
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <View>
        <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
      </View>
    );
  };
  PracticePut();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Book📕本</Text>
            <Text style={styles.subtitle}>หนังสือของฉัน</Text>

            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder="Search for book" />
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BookBooking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>Book Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyBooking')} style={styles.button}>
                    <Text style={styles.buttonText}>My Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('BookTracking')} style={[styles.button, styles.inactiveButton]}>
                    <Text style={styles.buttonText}>Book Tracking</Text>
                </TouchableOpacity>
            </View>

            {/* Recommended Books */}
            <MyBookList />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 13,
        marginTop: StatusBar.currentHeight,
        width: 'auto',
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
        marginLeft: 14,
        marginRight: 14,
        marginRight: 34,
        height: 188,
        width: 337,
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

export default MyBooking;
