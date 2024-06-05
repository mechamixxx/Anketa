/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Notifications!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={styles.screen}>
      <Text>More!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
              case 'Notifications':
                iconName = 'notifications-outline';
                break;
              case 'More':
                iconName = 'ellipsis-horizontal-outline';
                break;
              default:
                iconName = 'help-outline';
            }

            return <Icon name={iconName} size={20} color={color} />;
          },
        })}
        /*tabBarOptions={{
          showIcon: true,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: { backgroundColor: 'white' },
          indicatorStyle: { backgroundColor: 'tomato' },
        }}*/
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});