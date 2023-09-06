import React from "react";
import { ThemeProvider } from "@rneui/themed";
import theme from "./theme/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/home";
import LoginScreen from "./app/screens/Login";
import ProfileScreen from "./app/screens/profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNav } from "./app/nav/stacknav";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme()}>
          {/* <Drawer ref={(ref) => (this._drawer = ref)}> */}
            <TabNav />
          {/* </Drawer> */}
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
