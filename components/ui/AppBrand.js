import { View, StyleSheet } from 'react-native'
import AppText from './AppText';
import { memo } from 'react';

const AppBrand = ({ marginTop, marginBottom }) => {

    console.log('1. AppBrand Rendered')

    return (
        <View style={[styles.container, { marginTop: marginTop, marginBottom: marginBottom }]}>
            <AppText variant='displaySmall'><AppText variant='displaySmall' style={styles.accent}>EV</AppText>Tracker</AppText>
            <AppText variant='titleMedium' style={styles.subtitle}>The Pokémon EV Tracker</AppText>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    accent: {
        color: '#FF0404'
    },

    subtitle: {
        color: '#808080'
    }

});

export default memo(AppBrand)