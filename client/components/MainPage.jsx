// Example for a functional component
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ToastAndroid, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import AddPost from './AddPost';
import ListPost from './ListPost';
import UserPage from './UserPage';
const MainPage = ({ navigation, route: routeProp }) => {
    const route = useRoute();
    const userId = routeProp.params?.userId;
    const handleSignout = () => {
        // Perform any additional signout logic if needed
        signout();
        // Navigate to the login screen or any other screen as needed
        navigation.navigate('Login');
    };
    return (
        <Tab.Navigator initialRouteName="ListPost">
            <Tab.Screen
                name="AddPost"
                component={() => <AddPost userId={userId} />}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Add Post',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ListPost"
                component={() => <ListPost userId={userId} />}
                options={{
                    headerShown: false,
                    tabBarLabel: 'List Post',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="UserPage"
                component={() => <UserPage userId={userId} />}
                options={{
                    headerShown: false,
                    tabBarLabel: 'User Page',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({

    backButton: {
        width: 100,
        height: 50,
        backgroundColor: 'black', // You can change the color
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20,
        flexDirection: 'row'
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
})

export default MainPage;
