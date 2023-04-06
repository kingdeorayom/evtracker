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
                title='Increase'
                iconName='plus'
                onPress={increment}
            />
            <AppButton
                style={styles.controlButton}
                title='Decrease'
                iconName='minus'
                onPress={decrement}
            />
        </View>
    )
}

export default ControlButtons

const styles = StyleSheet.create({

    controlButtonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },

    controlButton: {
        width: '75%',
        marginHorizontal: 5,
        marginVertical: 7
    },


})