import { StyleSheet, View } from 'react-native'
import AppButton from './ui/AppButton'
import { memo } from 'react'

const ControlButtons = ({
    increment,
    decrement
}) => {

    return (

        <View style={styles.controlButtonsContainer}>
            <AppButton
                style={styles.controlButton}
                title='Increase'
                iconName='plus'
                onPress={increment}
                theme={{
                    roundness: 1.5,
                    // colors: { primary: 'rgb(255, 218, 212)', onPrimary: 'black' }
                }}
            />
            <AppButton
                style={styles.controlButton}
                title='Decrease'
                iconName='minus'
                onPress={decrement}
                theme={{
                    roundness: 1.5,
                    // colors: { primary: 'rgb(255, 218, 212)', onPrimary: 'black' }
                }}
            />
        </View>
    )
}

export default memo(ControlButtons)

const styles = StyleSheet.create({

    controlButtonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 15
    },

    controlButton: {
        width: '100%',
        // marginHorizontal: 5,
        marginVertical: 7,
        marginBottom: 10
    },


})