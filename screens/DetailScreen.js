import { Image, StyleSheet, View } from 'react-native';
import { AppScreen, AppText } from '../components';

const DetailScreen = ({ }) => {



    return (
        <AppScreen>
            <View style={styles.container}>

                <View style={styles.wrapper}>
                    <Image
                        source={require('../assets/3.png')}
                        style={styles.sprite}
                    />

                    <View>
                        <AppText variant='titleMedium'>{`No. 003`}</AppText>
                        <AppText variant='headlineMedium'>Bulbasaur</AppText>
                        <AppText variant='titleMedium'>{`Seed Pokemon`}</AppText>
                    </View>
                </View>

            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    sprite: {
        width: 128,
        height: 128,
        marginHorizontal: 15
    }

});

export default DetailScreen
