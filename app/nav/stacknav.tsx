import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/Login";
import ProfileScreen from "../screens/profile";
import { Button } from "@rneui/themed";
import AccountScreen from "../screens/Account";
import AddTransactionScreen from "../screens/Add Transactions";

const LeftDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

export function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={HomeStackNav} />
      <Tab.Screen name="Settings" component={SettingsStackNav} />
    </Tab.Navigator>
  );
}

function HomeStackNav() {
  return (
    <Stack.Navigator id="home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
    </Stack.Navigator>
  );
}

function SettingsStackNav() {
  return (
    <Stack.Navigator id="settings">
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
