import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComplainStatus = () => {
    // const [btnPosition, setBtnPosition] = useState('Chosen');

    // const toggleOption = (option) => {
    //     setBtnPosition(option);
    // };

    //Get Method
    const PracticeGet = () => {
        const [data, setData] = useState(null);
      
        useEffect(() => {
          fetchData1();
        }, []);
      
        const fetchData1 = async () => {
          try {
            const response = await fetch('http://localhost:3000/complain/get-complains-status');
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        return (
          <View>
            <Text>{data ? JSON.stringify({studentId : data[0]['studentId'] , subject : data[0]['subject'],
            description : data[0]['description'] , status : data[0]['status']}) : 'Loading...'}</Text>
          </View>
        );
      };
      PracticeGet(); 

    return (
        <View style={styles.container}>
            <View style={styles.block}></View>
            <View style={styles.block}></View>

            <Text style={styles.mainText}>Complain Status📑</Text>
            <Text style={styles.miniText}>สถานะร้องเรียน</Text>

            <View style={styles.tabMenu}>
                <View style={styles.tab}>
                    <Text style={[styles.button, styles.complainForm]}>ฟอร์มรับเรื่อง</Text>
                </View>
                <View style={styles.tab}>
                    <Text style={[styles.button, styles.complainStatus]}>สถานะการร้องเรียน</Text>
                </View>
            </View>

            <View style={styles.status}>
                <View style={styles.card}>
                    <Text style={styles.topic}>{data['subject']}</Text>
                    <Text style={[styles.statusText, styles.inProcess]}>{data['status']}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.topic}>{data['subject']}</Text>
                    <Text style={[styles.statusText, styles.waitingReceive]}>{data['status']}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.topic}>{data['subject']}</Text>
                    <Text style={[styles.statusText, styles.succeed]}>{data['status']}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    block: {
        width: 365,
        height: 10,
        backgroundColor: '#C3002F',
        opacity: 0.3,
        position: 'fixed',
    },
    mainText: {
        color: '#C3002F',
        fontSize: 40,
        paddingTop: 42,
        margin: 0,
    },
    miniText: {
        color: 'black',
        fontSize: 30,
        margin: 0,
    },
    tabMenu: {
        flexDirection: 'row',
        width: 317,
        marginTop: 11,
        borderRadius: 50,
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 50,
    },
    button: {
        width: 160,
        height: 26,
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 13,
        fontFamily: 'Imprima',
    },
    complainForm: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    complainStatus: {
        backgroundColor: '#FFDFAE',
    },
    status: {
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        width: '90%',
        borderRadius: 50,
    },
    card: {
        marginBottom: 25,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
    },
    topic: {
        fontSize: 13,
        fontFamily: 'Imprima',
    },
    statusText: {
        marginTop: 10,
        position: 'relative',
        padding: 5,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Imprima',
        flexShrink: 0,
        width: '50%',
    },
    inProcess: {
        backgroundColor: '#FDF1C5',
    },
    waitingReceive: {
        backgroundColor: '#FDCCC5',
    },
    succeed: {
        backgroundColor: 'rgb(217, 255, 160)',
    },
});

export default ComplainStatus;
