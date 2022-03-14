import * as React from 'react';
import { StyleSheet } from 'react-native';
import Signup from './components/SignUp';
import Login from './components/Login';
import Rooms from './Components/Rooms';
import ForgotPassword from './components/ForgotPassword';
import Location from './Components/Location';
import Calender from './Components/Calender';
import Amenities from './Components/Amenities';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

    <Stack.Screen name="Amenities" component={Amenities}   options={{headerShown: false}} /> 

        {/* {/* <Stack.Screen name="Login" component={Login}    options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={Signup}  options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}   options={{headerShown: false}} /> */}
        {/* <Stack.Screen name="Rooms" component={Rooms} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Location" component={Location}   options={{headerShown: false}} />
        <Stack.Screen name="Calender" component={Calender}   options={{headerShown: false}} /> */}
       
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
