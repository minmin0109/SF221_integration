import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from './app/Profiles/ProfileScreen';
import Class from './app/Class/Class.js';

import EnrollCard from './app/Card/EnrollCard';
import HealthCard from './app/Card/HealthCard';
import HomeCard from './app/Card/HomeCard.js'
import DormCard from './app/Card/DormCard.js';
import LibraryCard from './app/Card/LibraryCard.js';
import ComplainCard from './app/Card/ComplainCard.js';
import TransportCard from './app/Card/TransportCard.js';
import ReserveCard from './app/Card/ReserveCard.js';

import Enroll from './app/Study/Enroll.js'
import Exam from './app/Study/Exam.js'
import Schedule from './app/Study/Schedule.js'
import Transcript from './app/Study/Transcipt.js'
import Inform from './app/Study/Inform.js'

import MentalHealth from './app/Health/MentalHealth.js'

import BookBooking from './app/Books/BookBooking.js'
import MyBooking from './app/Books/MyBooking.js'
import BookTracking from './app/Books/BookTracking.js'

import ComplainForm from './app/Complain/ComplainForm.js'
import ComplainStatus from './app/Complain/ComplainStatus.js'

import RoomBooking from './app/Reserve/RoomBooking.js'

//Screen names
const homeName = "Home";
const profilesName = "Profile";
const className = "Class";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={HomeTab}/>
    //     <Stack.Screen name='Enroll Card' component={EnrollCard} />
    //     <Stack.Screen name='Health Card' component={HealthCard} />
    //     <Stack.Screen name='Library Card' component={LibraryCard} />
    //     <Stack.Screen name='Reserve Card' component={ReserveCard} />
    //     <Stack.Screen name='Dorm Card' component={DormCard} />
    //     <Stack.Screen name='Complain Card' component={ComplainCard} />
    //     <Stack.Screen name='Transport Card' component={TransportCard} />

    //     <Stack.Screen name='Enroll' component={Enroll} />
    //     <Stack.Screen name='Exam' component={Exam} />
    //     <Stack.Screen name='Schedule' component={Schedule} />
    //     <Stack.Screen name='Transcript' component={Transcript} />
    //     <Stack.Screen name='Inform' component={Inform} />

    //     <Stack.Screen name='Mental Health' component={MentalHealth} />

    //     <Stack.Screen name='Book Booking' component={BookBooking} />
    //     <Stack.Screen name='My Booking' component={MyBooking} />
    //     <Stack.Screen name='Book Tracking' component={BookTracking} />

    //     <Stack.Screen name='Complain Form' component={ComplainForm} />
    //     <Stack.Screen name='Complain Status' component={ComplainStatus} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <RoomBooking />
  );
}

function HomeTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === profilesName) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === className) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen name={homeName}>
        {() => <HomeCard navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name={className} component={Class} />
      <Tab.Screen name={profilesName} component={ProfileScreen} />

    </Tab.Navigator>
  );
}
