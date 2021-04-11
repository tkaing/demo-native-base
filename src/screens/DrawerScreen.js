import React, { useEffect } from "react";
import { Container, Text, Button, Drawer } from 'native-base';
import * as ScreenOrientation from "expo-screen-orientation";
import DrawerSideBar from "../subscreens/DrawerSideBar";

const DrawerScreen = ({
    route,
    navigation
}) => {

    const { name } = route.params;

    const Handling = {
        openDrawer: () => {
            this.drawer._root.open();
        },
        closeDrawer: () => {
            this.drawer._root.close();
        }
    };

    useEffect(() => {
        return navigation.addListener('focus', () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        });
    }, [navigation]);

    return (
        <Drawer ref={ (ref) => { this.drawer = ref } }
                content={ <DrawerSideBar /> }
                onClose={ () => Handling.closeDrawer() }>
            <Container>

                <Text>Hello DrawerScreen !</Text>

                <Button onPress={ () => Handling.openDrawer() }>
                    <Text>Open Drawer !</Text>
                </Button>

            </Container>
        </Drawer>
    );
};

export default DrawerScreen;