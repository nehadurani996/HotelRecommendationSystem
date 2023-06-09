import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator , BottaomTabBar} from "@react-navigation/bottom-tabs"
import Svg, {Path} from 'react-native-svg';
import {Home, Hotel, Locations,Rate,info} from "../screens";
import {COLORS, icons, images} from "../constants"
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const Tabs=() => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
            position:'absolute',
            left:0,
            right:0,
            borderTopWidth:0,
            backgroundColor: "white",
            elevation:0
            }
        }}
        >
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({focused} )=> (
                <Image
                source={icons.hotel}
                resizeMode="contain"
                style ={{
                    width: 25,
                    height: 25,
                    tintColor:focused ? COLORS.primary : COLORS.secondry
                }}
                />
                
                ),
                tabBarOptions:(props) =>(
                    <TabBarCustomButton  {...props} />
                    
                )
            }}
            />
            <Tab.Screen 
            name="search"
            component={Home}
    
                
            options={{
                tabBarIcon:({focused} )=> (
                <Image
                source={images.search}
                resizeMode="contain"
                style ={{
                    width: 25,
                    height: 25,
                    tintColor:focused ? COLORS.primary : COLORS.secondry
                }}
                />
                
                ),
                tabBarOptions:(props) =>(
                    <TabBarCustomButton  {...props} />
                ),
                
            }}
            />
            <Tab.Screen 
            name="List"
            component={Hotel}
            options={{
                tabBarIcon:({focused} )=> (
                <Image
                source={images.location}
                resizeMode="contain"
                style ={{
                    width: 25,
                    height: 25,
                    tintColor:focused ? COLORS.primary : COLORS.secondry
                }}
                />
                
                ),
                tabBarOptions:(props) =>(
                    <TabBarCustomButton  {...props} />
                )
            }}
            />
            <Tab.Screen 
            name="Feedback"
            component={Locations}
            options={{
                tabBarIcon:({focused} )=> (
                <Image
                source={images.user}
                resizeMode="contain"
                style ={{
                    width: 25,
                    height: 25,
                    tintColor:focused ? COLORS.primary : COLORS.secondry
                }}
                />
                
                ),
                tabBarOptions:(props) =>(
                    <TabBarCustomButton  {...props} />
                )
            }}
            />
        </Tab.Navigator>
    )

}
export default Tabs;