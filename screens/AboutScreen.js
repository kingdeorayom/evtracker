import { StyleSheet, View } from 'react-native';
import { AppScreen, AppButton } from './components';

const AboutScreen = () => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppButton
                    title='Button'
                    iconName='camera-outline'
                />
            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default AboutScreen
