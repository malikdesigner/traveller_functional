// AddPost.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ToastAndroid, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import apiUrl from './apiUrl';

import DateTimePickerModal from 'react-native-modal-datetime-picker';


const AddPost = ({ userId }) => {
    const [travellingTo, setTravellingTo] = useState('');
    const [travellingFrom, setTravellingFrom] = useState('');
    const [seat, setSeat] = useState('')
    const [date, setDate] = useState(new Date());
    const [car, setCar] = useState('');

    // const [showDatePicker, setShowDatePicker] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showToast = (message) => {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
            ToastAndroid.CENTER,
            ToastAndroid.WHITE
        );
    };
    const handleConfirm = (selectedDate) => {
        setDate(selectedDate);
        hideDatePicker();
    };

    // Function to get tomorrow's date
    const getTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleSubmit = async () => {
        if (travellingTo == '') {
            return showToast('Please add your destination');

        }
        else if (travellingFrom == '') {
            return showToast('Please add your starting location');

        }
        else if (seat == '') {
            return showToast('Please add number of seats available');
        }
        else if (car == '') {
            return showToast('Please add car of your travel');
        }
        else if (date == '') {
            return showToast('Please add date of your travel');
        }
        else {

            const formData = {
                travellingTo,
                travellingFrom,
                seat,
                car,
                date,
                userId
            };

            try {
                // Make a POST request to your backend API
                const response = await fetch(`${apiUrl}/addTravel`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                // Handle success
                if (result.ok) {
                    // Show a success toast
                    ToastAndroid.show('Record saved successfully', ToastAndroid.SHORT);

                } else {
                    // Show an error toast
                    ToastAndroid.show(result.message || 'Error saving record', ToastAndroid.SHORT);
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle network error and show an error toast
                ToastAndroid.show('Network error', ToastAndroid.SHORT);
            }
        }
    };


    return (
        <View style={styles.form} >
            <Text style={[styles.stepsHeading, { marginTop: 5, fontSize: 30, alignSelf: 'center', marginBottom: 10 }]}>Add Your Details</Text>

            <Text style={[styles.stepsHeading, { marginTop: 10, marginBottom: 10 }]}>Travelling From</Text>
            <TextInput
                style={styles.input}

                placeholder="Travelling From"
                value={travellingTo}
                onChangeText={(text) => setTravellingTo(text)}
            />

            <Text style={[styles.stepsHeading, { marginTop: 10, marginBottom: 10 }]}>Travelling To</Text>
            <TextInput
                style={styles.input}

                placeholder="Travelling To"
                value={travellingFrom}
                onChangeText={(text) => setTravellingFrom(text)}
            />
            <Text style={[styles.stepsHeading, { marginTop: 10, marginBottom: 10 }]}>Car</Text>
            <TextInput
                style={styles.input}

                placeholder="Car"
                value={car}
                onChangeText={(text) => setCar(text)}
            />
            <Text style={[styles.stepsHeading, { marginTop: 10, marginBottom: 10 }]}>Seats Available</Text>
            <TextInput
                style={styles.input}

                placeholder="Seats"
                value={seat}
                onChangeText={(text) => setSeat(text)}
            />
            <Text style={[styles.stepsHeading, { marginTop: 10, marginBottom: 10 }]}>
                Date:
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ flex: 1, padding: 10, }}
                    placeholder="Select Date"
                    value={date.toDateString()}
                    editable={false}
                />
                <TouchableOpacity onPress={showDatePicker}>
                    <Icon name="calendar" size={20} color="#333" style={styles.calendarIcon} />
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={getTomorrow()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <TouchableOpacity style={styles.roundButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
                <Icon name="arrow-right" style={styles.arrowIcon} size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({

    form: {
        paddingTop: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        height: '100%',
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
        marginBottom: '5%',
        color: 'gray',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        color: 'gray'
    },
    roundButton: {
        width: 100,
        height: 50,
        backgroundColor: 'black', // You can change the color
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row'
    },
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
    buttonText: {
        color: 'white',
        fontSize: 20,
    },

    startingScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#077eed',
        marginTop: 100
    },
    appName: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        padding: 50
    },
    logo: {
        width: 100,
        height: 100,
        padding: 50,

    },
    tagline: {
        fontSize: 40,
        padding: 50,
        color: '#e3eafa',


    },
    getStartedButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 15,
        paddingRight: 100,
        paddingLeft: 100,

        borderRadius: 10,
        marginBottom: 10
    },
    buttonTextLarge: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    stepsHeading: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    dropdown: {
        minWidth: 100, // Adjust the minimum width as needed
        marginBottom: 10,
    },
    countryLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    calendarIcon: {
        padding: 10,
    },
});
export default AddPost;
