import { StyleSheet, View } from 'react-native';
import { AppBrand, AppScreen } from '../components';

const AboutScreen = () => {
    return (
        <AppScreen>
            <View style={styles.container}>

                <AppBrand marginTop={50} />

            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});

export default AboutScreen
