import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIcon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../SettingsScreen';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SelectScreen from '../SelectScreen';

const Tab = createBottomTabNavigator();

function BottomTabScreen() {
    return (
        
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => 
                            <MaterialCommunityIcons name="home" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="Select"
                    component={SelectScreen}
                    options={{
                        tabBarLabel: 'Select',
                        tabBarIcon: ({ color, size }) => 
                            <IconIcon name="search" color={color} size={size} />,
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'profile',
                        tabBarIcon: ({ color, size }) => 
                            <IconIcon name="person" color={color} size={size} />,
                        tabBarBadge: 3,
                    }}
                />
            </Tab.Navigator>
       
    );
}
export default BottomTabScreen;