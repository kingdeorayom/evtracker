import { StyleSheet, View } from 'react-native';
import { AppScreen, AppButton, AppText } from '../components';

const HomeScreen = ({ navigation }) => {
    return (
        <AppScreen>
            <View style={styles.container}>
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

export default HomeScreen
