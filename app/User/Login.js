import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerImage}>
                    <View style={styles.firstImage}>
                        <Image source={require('./img/img-1.png')} style={styles.image1} />
                    </View>
                    <View style={styles.secondImage}>
                        <Image source={require('./img/img-2.png')} style={styles.image2} />
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Welcome To,{'\n'}THAMMASAT UNIVERSITY</Text>
                <View style={styles.userInfo}>
                    <View style={styles.userImg}></View>
                    <Text style={styles.userName}>Nutpraphut Praphutsirikul{'\n'}6510742072</Text>
                </View>
                <View style={styles.imgBottom}>
                    <Image source={require('./img/Vector 59.png')} style={styles.image} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#ff861e',
        justifyContent: 'center',
    },
    header: {
        marginLeft: 20,
        marginTop: 330,
    },

    headerImage: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    firstImage: {
        marginTop: 10,
    },
    image1: {
        width: 46.36,
        height: 50,
    },
    image2: {
        width: 243.655,
        height: 80,
    },
    main: {
        position: 'relative',
        alignItems: 'center',
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: -15,
    },
    userInfo: {
        alignItems: 'center',
        marginTop: 30,
    },
    userImg: {
        width: 320,
        height: 320,
        borderRadius: 180,
        backgroundColor: 'lightgray',
        marginRight: 10,
        alignItems: 'center',
    },
    userName: {
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 36,
        letterSpacing: -0.24,
        marginTop: 20,
    },
    imgBottom: {
        marginLeft: 220,
        transform: [{translateY: -180}],
        height: '50%',
    },
});

export default Login;