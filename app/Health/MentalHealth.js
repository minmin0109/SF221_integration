import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

//Get method
const PracticeGet = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await fetch('http://localhost:3000/health/get-appointments');
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
PracticeGet();

//Post method
const PracticePost = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData2();
    }, []);
  
    const fetchData2 = async () => {
      try {
        const response = await fetch('http://localhost:3000/health/add-appointments', {
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

// ไม่มีการเก็บค่าและการแสดงผลของการอัพเดทสถานะ
//   //put method
//   const PracticePut = () => {
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       fetchData3();
//     }, []);
  
//     const fetchData3 = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/health/update-appointments', {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             // ระบุข้อมูลที่ต้องการส่งไปยังเซิร์ฟเวอร์ตรงนี้
//             // เช่น appointment_id, updated_data, etc.
//           }),
//         });
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     return (
//       <View>
//         <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
//       </View>
//     );
//   };
//   PracticePut();
  


const MentalHealth = () => {
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
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                <View style={styles.enrollContainer}>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.openButton}>Open Modal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <View style={styles.block}></View>
                            <View style={styles.block}></View>

                            <Text style={styles.mainText}>Mental Health</Text>
                            <Text style={styles.miniText}>แจ้งปัญหาสุขภาพ</Text>

                            <View style={styles.tabMenu}>
                                <TouchableOpacity onPress={() => { }} style={[styles.button, styles.bodyHealthButton]}>
                                    <Text style={styles.buttonText}>Body-Health</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { }} style={[styles.button, styles.emergencyButton]}>
                                    <Text style={styles.buttonText}>Emergency</Text>
                                </TouchableOpacity>
                            </View>

                            <TextInput
                                style={styles.input}
                                multiline={true}
                                placeholder="แจ้งเหตุ...."
                                placeholderTextColor="#9B9B9B"
                            />

                            <View style={styles.submit}>
                                <TouchableOpacity onPress={() => { }} style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>ส่งเรื่อง</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
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
    block: {
        width: '100%',
        height: 10,
        backgroundColor: '#C3002F',
        opacity: 0.3,
        position: 'absolute',
        top: 0,
        overflow: 'hidden',
    },
    mainText: {
        marginTop: '25%',
        color: '#C3002F',
        fontSize: 40,
        paddingTop: 5,
        marginLeft: '5%',
        margin: 0,
        fontFamily: 'Imprima',
    },
    miniText: {
        color: 'black',
        fontSize: 30,
        paddingLeft: -35,
        marginLeft: '5%',
        margin: 0,
        fontFamily: 'Imprima',
    },
    tabMenu: {
        flexDirection: 'row',
        marginTop: 11,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: 'rgba(243, 243, 243, 1)',
        width: 250,
        marginLeft: '13%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 50,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    bodyHealthButton: {
        backgroundColor: '#FFDFAE',
    },
    emergencyButton: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    buttonText: {
        fontSize: 13,
        fontFamily: 'Imprima',
    },
    input: {
        marginTop: 34,
        marginLeft: 25,
        width: 310,
        height: 375,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 10,
    },
    submit: {
        alignItems: 'center',
        marginTop: 28,
    },
    submitButton: {
        backgroundColor: '#FFDFAE',
        borderRadius: 20,
        width: 125,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 13,
        fontFamily: 'Imprima',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 'auto',
    },
    modalContent: {
        width: 365,
        height: 800,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 5,
        padding: 2,
        marginTop: 10,
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
    openButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87c4ff',
        borderRadius: 20,
        marginTop: '50%',
        padding: 10,
      },
});

export default MentalHealth;
