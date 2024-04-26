import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';

//get Method
const Practice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/endyourlife/get-result/${studentId}`);
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
Practice(studentId);

const Transcript = () => {
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
                        <Text style={styles.openButton}>Transcipt</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <View style={styles.enrollContainer}>
                                <View style={styles.enrollDiv}>
                                    <Text style={styles.enrollText}>Transcript</Text>
                                </View>
                                <View style={styles.detailDiv}>
                                    <Text style={styles.detailText}>ผลการเรียน</Text>
                                </View>
                                <View style={styles.profileGrid}>
                                    <Image source={{ uri: '<path-to-image>' }} style={styles.profileImage} />
                                    <View style={styles.profileInfo}>
                                        <Text style={styles.profileText}>6510742072</Text>
                                        <Text style={styles.profileTextName}>Nutpraphut Praphutsirikul</Text>
                                    </View>
                                </View>
                                <View style={styles.lastModifyDiv}>
                                    <Text style={styles.lastModifyText}>อัพเดทล่าสุด: ปปปป/ดด/วว ชช:นน</Text>
                                </View>
                                <View style={styles.selectContainer}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={() => toggleOption('Chosen')} style={[styles.toggleBtn, btnPosition === 'Chosen' ? styles.selectedBtn : null]}>
                                            <Text style={btnPosition === 'Chosen' ? styles.selectedText : null}>Term</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => toggleOption('Drawn')} style={[styles.toggleBtn, btnPosition === 'Drawn' ? styles.selectedBtn : null]}>
                                            <Text style={btnPosition === 'Drawn' ? styles.selectedText : null}>Curriculum</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.semDiv}>
                                    <Text style={styles.semText}>Term 1 / 2566</Text>
                                </View>
                                <View style={styles.planContainer}>
                                    <View style={styles.card}>
                                        <View style={styles.firstContentCard}>
                                            <View style={styles.content1}>
                                                <Text style={styles.kit1}>CN101</Text>
                                                <Text style={styles.kit2}>3หน่วยกิต (3 หน่วยกิต ลงทะเบียน)</Text>
                                            </View>
                                            <Text style={styles.kit3}>Introduction to Computer Progamming 101</Text>
                                        </View>
                                        <View style={styles.contentCard}>
                                            <View style={styles.content1}>
                                                <Text style={styles.kit1}>JP171</Text>
                                                <Text style={styles.kit2}>3หน่วยกิต (3 หน่วยกิต ลงทะเบียน)</Text>
                                            </View>
                                            <Text style={styles.kit3}>JAPANESE FOR BEGINNERS 1</Text>
                                        </View>
                                        <View style={styles.contentCard}>
                                            <View style={styles.content1}>
                                                <Text style={styles.kit1}>SF231</Text>
                                                <Text style={styles.kit2}>3หน่วยกิต (3 หน่วยกิต ลงทะเบียน)</Text>
                                            </View>
                                            <Text style={styles.kit3}>DATA STRUTURES AND ALGORITHMS</Text>
                                        </View>
                                        <View style={styles.contentCard}>
                                            <View style={styles.content1}>
                                                <Text style={styles.kit1}>CN321</Text>
                                                <Text style={styles.kit2}>3หน่วยกิต (3 หน่วยกิต ลงทะเบียน)</Text>
                                            </View>
                                            <Text style={styles.kit3}>DATA COMMUNICATION AND COMPUTER NETWORK 1</Text>
                                        </View>
                                    </View>
                                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    openButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87c4ff',
        borderRadius: 20,
        marginTop: '50%',
        padding: 10,
    },
    enrollDiv: {
        marginTop: '10%',
        alignItems: 'left',
    },
    enrollText: {
        color: '#C3002F',
        fontSize: 40,
        fontWeight: '800',
        fontFamily: 'Poppins',
        textAlign: 'left',
        alignItems: 'left',
        marginLeft: 20,
    },
    detailDiv: {
        alignItems: 'left',
        transform: [{ translateX: -26.3 }],
    },
    detailText: {
        fontSize: 30,
        fontFamily: 'Imprima',
        marginLeft: 45,
    },
    profileGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 55,
    },
    profileImage: {
        width: 48.335,
        height: 48.392,
        borderRadius: 48.392,
        marginRight: 45,
        marginLeft: 50,
        backgroundColor: 'lightgrey',
    },
    profileInfo: {
        flex: 1,
    },
    profileText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        marginLeft: -25,
    },
    profileTextName: {
        fontFamily: 'Poppins',
        fontSize: 16,
        marginTop: 5,
        marginLeft: -25,
    },
    lastModifyDiv: {
        marginLeft: 20,
        marginTop: 10,
    },
    lastModifyText: {
        fontFamily: 'Poppins',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    buttonBox: {
        position: 'relative',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    toggleBtn: {
        paddingVertical: 6,
        paddingHorizontal: 6.5,
        marginRight: 5,
        backgroundColor: '#ffdfae',
        borderRadius: 20,
    },
    semDiv: {
        marginLeft: 20,
        marginTop: 10,
    },
    semText: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginTop: 6,
        fontSize: 17,
    },

    // Modal styles
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

    //Card styles
    planContainer: {
        height: 'auto',
        marginTop: 15,
        alignItems: 'center',
        marginLeft: -20,
    },
    card: {
        marginBottom: 20,
        marginLeft: 25,
        paddingLeft: 5,
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        height: 330,
        borderRadius: 15,
    },
    Font: {
        position: 'relative',
        left: '490%',
        paddingTop: 1.5,
    },
    Heart: {
        position: 'relative',
        left: '520%',
        paddingTop: 3.5,
    },
    firstContentCard: {
        marginTop: 5,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
    },
    content1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    kit0: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    kit1: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    kit2: {
        marginLeft: 8,
        fontSize: 13,
        color: 'rgba(179, 178, 183, 1)',
    },
    kit3: {
        fontSize: 13,
        marginLeft: 5,
    },
    contentCard: {
        paddingBottom: 2,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgba(179, 178, 183, 1)',
        width: 320,
        marginTop: 11,
    },
});

export default Transcript;
