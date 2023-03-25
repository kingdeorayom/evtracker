import { View, StyleSheet } from 'react-native'
import AppText from './AppText';

const AppBrand = ({ marginTop }) => {
    return (
        <View style={[styles.container, { marginTop: marginTop }]}>
            <AppText variant='displayMedium'><AppText variant='displayMedium' style={styles.accent}>EV</AppText>Tracker</AppText>
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

export default AppBrand