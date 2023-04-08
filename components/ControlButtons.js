import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import AppButton from './ui/AppButton'

const ControlButtons = ({
    increment,
    decrement
}) => {

    return (
        <View style={styles.controlButtonsContainer}>
            <AppButton
                style={styles.controlButton}
                title='Decrease'
                iconName='minus'
                onPress={decrement}
                theme={{ roundness: 1.5 }}
            />
            <AppButton
                style={styles.controlButton}
                title='Increase'
                iconName='plus'
                onPress={increment}
                theme={{ roundness: 1.5 }}
            />
        </View>
    )
}

export default memo(ControlButtons)

const styles = StyleSheet.create({

    controlButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 15,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        borderWidth: .5,
    },

    controlButton: {
        width: '49%',
        marginHorizontal: 5,
        marginVertical: 7,
        marginBottom: 10
    },

})