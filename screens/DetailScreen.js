import { Image, StyleSheet, View } from 'react-native';
import { AppScreen, AppText } from '../components';
import pokemon from '../data/pokemon';

const DetailScreen = ({ route }) => {

    const { id, index } = route.params

    return (
        <AppScreen>
            <View style={styles.container}>

                <View style={styles.wrapper}>
                    <Image
                        source={pokemon[index].sprite}
                        style={styles.sprite}
                    />

                    <View>
                        <AppText variant='titleSmall'>{`No. ${pokemon[index].id}`}</AppText>
                        <AppText variant='headlineMedium'>{pokemon[index].name}</AppText>
                        <AppText variant='titleMedium'>{`${pokemon[index].category} Pokémon`}</AppText>
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
        alignItems: 'center',
    },

    sprite: {
        width: 128,
        height: 128,
        marginLeft: 20,
        marginRight: 15
    }

});

export default DetailScreen
