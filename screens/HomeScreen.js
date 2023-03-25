import { StyleSheet, View, Image } from 'react-native';
import { AppScreen, AppButton, AppText, AppBrand } from '../components';

const HomeScreen = ({ navigation }) => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppBrand marginTop={10} />
            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});

export default HomeScreen
