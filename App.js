import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StyleProvider } from 'native-base';
import HomeScreen from "./src/screens/HomeScreen";
import DrawerScreen from "./src/screens/DrawerScreen";
import getTheme from './native-base-theme/components';
import Platform from './native-base-theme/variables/platform';

const Stack = createStackNavigator();

const App = () => {

    const [fontsLoaded] = useFonts({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
    });

    if (!fontsLoaded)
        return <AppLoading />;

    return (
        <StyleProvider style={ getTheme(Platform) }>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={ HomeScreen }
                        options={{ title: 'Welcome Home' }}
                    />
                    <Stack.Screen
                        name="Drawer"
                        component={ DrawerScreen }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </StyleProvider>
    );
};

export default App;