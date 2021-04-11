import React, { useEffect } from "react";
import { Container, Text, Button } from 'native-base';
import * as ScreenOrientation from 'expo-screen-orientation';

const HomeScreen = ({
    navigation
}) => {

    useEffect(() => {
        return navigation.addListener('focus', () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        });
    }, [navigation]);

    return (
        <Container>

            <Button rounded info
                    onPress={ () => navigation.navigate('Drawer', {
                        name: 'Jane'
                    }) }>
                <Text>Go to DrawerScreen</Text>
            </Button>

        </Container>
    );
};

export default HomeScreen;