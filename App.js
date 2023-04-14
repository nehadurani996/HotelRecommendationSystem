import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import Tabs from './navigation/tabs'
import {Home, Hotel, Locations,Rate,Filter,Splash,info, thanks} from './screens'
import { exp } from 'react-native/Libraries/Animated/src/Easing';
import { View } from 'react-native';
const Stack = createStackNavigator();

const App =() =>{
return(
  <NavigationContainer>
  <Stack.Navigator
  screenOptions={{
    headerShown: false     
   }}
   initialRouteName={"Splash"}
  >
     <Stack.Screen name="Splash" component={Splash}/>

    <Stack.Screen name="Home" component={Tabs}/>
    <Stack.Screen name="Hotel" component={Hotel}/>
    <Stack.Screen name="Locations" component={Locations}/>
    <Stack.Screen name="Rate" component={Rate}/>
    <Stack.Screen name="Filter" component={Filter}/>
    <Stack.Screen name="info" component={info}/>
    <Stack.Screen name="thanks" component={thanks}/>

    
    </Stack.Navigator> 
</NavigationContainer>
)
}
export default App;