import { View, StyleSheet } from 'react-native'
import AppText from './AppText';
import { memo } from 'react';

const AppBrand = () => {

    return (
        <View style={styles.container}>
            <AppText variant='displaySmall'><AppText variant='displaySmall' style={styles.accent}>EV</AppText>Tracker</AppText>
            <AppText variant='titleMedium' style={styles.subtitle}>The Pokémon EV Tracker</AppText>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 15
    },

    accent: {
        color: '#FF0404'
    },

    subtitle: {
        color: '#808080'
    }

});

export default memo(AppBrand)