import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';

const ComplainForm = () => {

    //Get Method
const PracticeGet = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData1();
    }, []);
  
    const fetchData1 = async () => {
      try {
        const response = await fetch('http://localhost:3000/complain/get-complains');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <View>
        <Text>{data ? JSON.stringify({studentId : data[0]['studentId'] , subject : data[0]['subject'],description : data[0]['description']}) : 'Loading...'}</Text>
      </View>
    );
  };
  PracticeGet(); 

  //Post Method
const PracticePost = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData2();
    }, [data]);
  
    const fetchData2 = async () => {
        try {
          const response = await fetch('http://localhost:3000/complain/add-complains', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                studentId: data.studentId,
                subject: data.subject,
                description: data.description }),
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


    const [btnPosition, setBtnPosition] = useState('Chosen');
    const [modalVisible, setModalVisible] = useState(false);

    const toggleOption = (option) => {
        setBtnPosition(option);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.enrollContainer}>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.openButton}>Complain</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.block}></View>

                        <Text style={[styles.font, styles.main]}>Complain Form📑</Text>
                        <Text style={[styles.font, styles.mini]}>ฟอร์มรับเรื่องร้องเรียน</Text>

                        <View style={styles.tabMenu}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={[styles.font, styles.complainForm]}>ฟอร์มรับเรื่อง</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={[styles.font, styles.complainStatus]}>สถานะการร้องเรียน</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.topic}>
                                <TextInput style={styles.input} placeholder="หัวข้อเรื่อง" />
                                <TextInput style={styles.input} placeholder="แจ้งถึง" />
                            </View>
                            <View style={styles.time}>
                                <TextInput style={styles.input} placeholder="เวลาที่เกิด" />
                            </View>
                            <TextInput style={[styles.inputContent, styles.fontFrom]}
                                multiline = { true } placeholder="แจ้งร้องเรียน" />
                        </View>

                        <View style={styles.submit}>
                            <TouchableOpacity style={styles.submitButton}>
                                <Text style={[styles.font, styles.submitText]}>ส่งเรื่อง</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    openButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87c4ff',
        borderRadius: 20,
        marginTop: '50%',
        padding: 10,
    },
    block: {
        width: 365,
        height: 10,
        backgroundColor: '#C3002F',
        opacity: 0.3,
        position: 'absolute',
        overflow: 'hidden',
    },
    font: {
        fontFamily: 'Imprima',
        marginTop: 2,
        marginBottom: 2,
    },
    main: {
        color: '#C3002F',
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 42,
        marginTop: 30,
    },
    mini: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 10,
        marginTop: 10,
    },
    tabMenu: {
        flexDirection: 'row',
        width: 'auto',
        marginTop: 15,
        borderRadius: 50,
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    complainForm: {
        fontSize: 13,
    },
    complainStatus: {
        fontSize: 13,
    },
    form: {
        alignItems: 'start',
        alignContents: 'flex-start',
        marginTop: 20,
        height: '50%',
    },
    topic: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-evenly',
    },
    time: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10,
        justifyContent: 'space-evenly',
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#F3F3F3',
        marginHorizontal: 4,
        marginBottom: 10,
    },
    inputContent: {
        backgroundColor: '#f3f3f3',
        height: '90%',
        marginLeft: 10,
        alignContent: 'flex-start',
    },
    fontFrom: {
        width: 310,
        height: 300,
    },
    submit: {
        alignItems: 'center',
        marginTop: 40,
    },
    submitButton: {
        backgroundColor: '#FFDFAE',
        borderRadius: 20,
        width: 125,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: {
        fontSize: 13,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
    },
    modalContent: {
        width: 365,
        height: 800,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        marginTop: 30,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeButtonText: {
        fontSize: 15,
        color: '#333',
    },
});

export default ComplainForm;
