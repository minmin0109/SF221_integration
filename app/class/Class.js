import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Class = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <Text style={styles.Day}>2 MAY 2024</Text>
            <Text style={styles.Main}>CLASS</Text>
          </View>
          <View style={styles.header2}>
            <Text style={styles.Font}>2/2023</Text>
          </View>
        </View>
        <View style={styles.conatiner}>
          <View style={styles.box}>
            <View style={styles.topbox} />
            <View style={styles.mainbox}>
              <Text style={styles.course}>CN311</Text>
              <Text style={styles.courseName}>OPERATING SYSEMS</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.topbox}></View>
            <View style={styles.mainbox}>
              <Text style={styles.course}>CN321</Text>
              <Text style={styles.courseName}>DATA COMMUN ..</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.topbox}></View>
            <View style={styles.mainbox}>
              <Text style={styles.course}>JP171</Text>
              <Text style={styles.courseName}>JAPANESE FOR BEGI ..</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.topbox}></View>
            <View style={styles.mainbox}>
              <Text style={styles.course}>SF221</Text>
              <Text style={styles.courseName}>SOFTWARE PORCESS</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.topbox}></View>
            <View style={styles.mainbox}>
              <Text style={styles.course}>SF222</Text>
              <Text style={styles.courseName}>SOFTWARE ENGINEER...</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.topbox}></View>
            <View style={styles.mainbox}>
              <Text style={styles.course}>S231</Text>
              <Text style={styles.courseName}>DATA STRUCTURES</Text>
              <Text style={styles.courseSection}>SECTION 760001</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 'auto',
  },
  scrollContainer: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 147,
    backgroundColor: 'white',
    top: 0,
    marginBottom: 130,
  },
  header1: {
    marginLeft: 20,
    marginTop: 80,
  },
  Day: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  Main: {
    fontSize: 35,
    fontFamily: 'Outfit',
    fontWeight: '900',
  },
  header2: {
    position: 'relative',
    borderRadius: 50,
    marginLeft: 200,
    marginTop: 123,
  },
  Font: {
    position: 'absolute',
    bottom: '21%',
    right: '50%',
    backgroundColor: 'rgb(217, 217, 217)',
    padding: 5,
    borderRadius: 50,
    fontSize: 23,
    textAlign: 'center',
  },
  conatiner: {
    display: 'grid',
    gap: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    width: 'auto',
  },
  box: {
    justifyContent: 'center',
    width: 165,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 5,
  },
  topbox: {
    height: 20,
    width: '100%',
    backgroundColor: 'rgb(39, 39, 39)',
    overflow: 'hidden',
  },
  mainbox: {
    marginTop: 5,
    marginLeft: 15,
    paddingLeft: '4%',
  },
  course: {
    fontFamily: 'Homenaje',
    fontWeight: '400',
    fontSize: 30,
    color: '#070F2B',
  },
  courseName: {
    fontFamily: 'Homenaje',
    fontWeight: '500',
    fontSize: 25,
  },
  courseSection: {
    fontFamily: 'Homenaje',
    fontWeight: '400',
    fontSize: 15,
  },
  Bardown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'rgb(244, 244, 244)',
    position: 'absolute',
    bottom: 0,
  },
});

export default Class;
