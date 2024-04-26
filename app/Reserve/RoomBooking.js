import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const RoomBooking = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainText}>Study Room 🛌</Text>
          <Text style={styles.miniText}>จองห้องติว</Text>
        </View>

        <View style={styles.tabWrapper}>
          <View style={styles.tabMenu}>
            <TouchableOpacity style={[styles.tabButton, styles.rangsit]}>
              <Text style={styles.font}>Rangsit</Text>
              <Text style={styles.font}>Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, styles.thaPrahanm]}>
              <Text style={styles.font}>Tha Prahanm</Text>
              <Text style={styles.font}>Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, styles.lampang]}>
              <Text style={styles.font}>Lampang</Text>
              <Text style={styles.font}>Campus</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabMenu}>
            <TouchableOpacity style={[styles.tabButton, styles.puey]}>
              <Text style={styles.font}>Puey</Text>
              <Text style={styles.font}>Ungpakorn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, styles.skr]}>
              <Text style={styles.font}>ศูนย์การเรียนรู้</Text>
              <Text style={styles.font}>กรมหลวงนราธิวาสราชนครินทร์</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, styles.coLearning]}>
              <Text style={styles.font}>Co-Learning</Text>
              <Text style={styles.font}>Puey Ungphakorn</Text>
            </TouchableOpacity>
            {/* Add more location buttons here */}
          </View>
        </View>

        {/* Add the list of study room cards here */}
        <View style={styles.studyRoomList}>
          <View style={styles.card}>
            <View style={styles.top}>
              <Image source={require('../img/dorm1.png')} />
              <View style={styles.content}>
                <Text style={styles.nameRoom}>Study Room 1</Text>
                <View style={styles.at}>
                  <View style={styles.location}>
                    <Image source={require('../img/svg/marker.svg')} />
                    <Text style={styles.font}>Rangsit Campus</Text>
                  </View>
                  <View style={styles.location}>
                    <Image source={require('../img/svg/home.svg')} />
                    <Text style={styles.font}>Puey Ungpakorn Library</Text>
                  </View>
                  <View style={styles.location}>
                    <Image source={require('../img/svg/Floot.svg')} />
                    <Text style={styles.font}>Fl.1</Text>
                  </View>
                </View>
                <View style={styles.period}>
                  <TouchableOpacity style={styles.openButton}><Text style={styles.font}>09:00 - 12:00</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.notButton}><Text style={styles.font}>12:00 - 15:00</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.notButton}><Text style={styles.font}>15:00 - 18:00</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.notButton}><Text style={styles.font}>18:00 - 21:00</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.closedButton}><Text style={styles.font}>CLOSED</Text></TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.down}>
              <View style={styles.content}>
                <View style={styles.inOf}>
                  <Image source={require('../img/svg/Frame.svg')} />
                  <View>
                    <Text style={styles.font}>TV</Text>
                    <Text style={styles.font}>Standard</Text>
                  </View>
                </View>
                {/* Repeat similar in-of views for other features */}
                <View style={styles.inOf}>
                  <Image source={require('../img/svg/people.svg')} />
                  <Text style={[styles.font, styles.num]}>6-16</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    marginTop: 20,
    backgroundColor: '#EAECF3',
    padding: 2,
    width: '100%',
  },
  header: {
    paddingVertical: 20,
  },
  mainText: {
    color: '#C3002F',
    fontSize: 40,
    paddingLeft: 25,
  },
  miniText: {
    color: 'black',
    fontSize: 30,
    paddingLeft: 25,
  },
  tabWrapper: {
    width: 'auto',
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  tabButton: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  font: {
    fontSize: 15,
  },
  rangsit: {
    backgroundColor: '#FFDFAE',
  },
  thaPrahanm: {
    backgroundColor: '#F3F3F3',
  },
  lampang: {
    backgroundColor: '#F3F3F3',
  },
  puey: {
    backgroundColor: '#ffef95',
  },
  studyRoomList: {
    height: 400,
    weight: '100%',
  },

  //card styles
  card: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    height: 110,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  top: {
    flexDirection: 'row',
    padding: 10,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  nameRoom: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  at: {
    flexDirection: 'row',
    marginTop: 5,
  },
  location: {
    flexDirection: 'row',
    marginRight: 10,
  },
  period: {
    flexDirection: 'row',
    marginTop: 10,
  },
  openButton: {
    backgroundColor: '#e06169',
    borderRadius: 2,
    marginRight: 3,
    padding: 3,
  },
  notButton: {
    backgroundColor: '#e06169',
    borderRadius: 2,
    marginRight: 3,
    padding: 3,
  },
  closedButton: {
    backgroundColor: '#bfbfbf',
    borderRadius: 2,
    marginRight: 3,
    padding: 3,
  },
  down: {
    borderTopWidth: 0.5,
    borderTopColor: '#888888',
    padding: 10,
  },
  inOf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  num: {
    color: '#d84a45',
    padding: 2.5,
    backgroundColor: '#ffdcfa',
    borderRadius: 5,
    fontSize: 8.3,
  },
  font: {
    fontSize: 10,
  },
};

export default RoomBooking;
