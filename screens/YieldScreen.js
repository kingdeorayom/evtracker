import { StyleSheet, View } from 'react-native';
import { AppScreen, AppButton } from '../components';

const YieldScreen = ({ navigation }) => {
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppButton
                    title='Button'
                    iconName='arrow-right'
                    onPress={() => navigation.navigate("Detail")}
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

export default YieldScreen
