import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';

const ComplainCard = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View style={styles.coursesBox}>
                    <TouchableOpacity style={styles.coursesItem} onPress={() => navigation.navigate('Complain Form')}>
                        <Image source={require('../img/enroll.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#fffbda' }]} />
                        <Text style={styles.itemTitle}>Complain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coursesItem} onPress={() => navigation.navigate('Complain Status')}>
                        <Image source={require('../img/health.png')} style={styles.itemImage} />
                        <View style={[styles.itemBackground, { backgroundColor: '#ffcdea' }]} />
                        <Text style={styles.itemTitle}>Complain Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: '100%',
    },
    coursesBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 50,
        justifyContent: 'center',
        marginBottom: 20,
    },
    coursesItem: {
        width: '65%',
        marginHorizontal: 15,
        marginBottom: 30,
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: '#f3f3f3',
        borderColor: '#000',
    },
    itemImage: {
        overflow: 'hidden',
        width: '70%',
        height: '70%',
        position: 'absolute',
        marginLeft: 140,
        marginTop: 50,
        zIndex: 4,
    },
    itemBackground: {
        height: 128,
        width: 128,
        borderRadius: 64,
        position: 'absolute',
        top: -75,
        right: -75,
        zIndex: 1,
        transform: [{ scale: 100 }],
    },
    itemTitle: {
        minHeight: 87,
        marginBottom: 25,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        zIndex: 5,
        position: 'relative',
    },
});

export default ComplainCard
