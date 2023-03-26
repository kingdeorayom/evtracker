import { StyleSheet, View } from 'react-native'
import AppButton from './ui/AppButton'

const ControlButtons = ({
    value,
    customValue,
    setHp,
    setAttack,
    setDefense,
    setSpecialAttack,
    setSpecialDefense,
    setSpeed
}) => {

    const increment = () => {
        if (value === 'hp')
            setHp(previousValue => previousValue + customValue)
        else if (value === 'atk')
            setAttack(previousValue => previousValue + customValue)
        else if (value === 'def')
            setDefense(previousValue => previousValue + customValue)
        else if (value === 'spa')
            setSpecialAttack(previousValue => previousValue + customValue)
        else if (value === 'spd')
            setSpecialDefense(previousValue => previousValue + customValue)
        else if (value === 'spe')
            setSpeed(previousValue => previousValue + customValue)
    }

    const decrement = () => {
        if (value === 'hp')
            setHp(previousValue => previousValue - customValue)
        else if (value === 'atk')
            setAttack(previousValue => previousValue - customValue)
        else if (value === 'def')
            setDefense(previousValue => previousValue - customValue)
        else if (value === 'spa')
            setSpecialAttack(previousValue => previousValue - customValue)
        else if (value === 'spd')
            setSpecialDefense(previousValue => previousValue - customValue)
        else if (value === 'spe')
            setSpeed(previousValue => previousValue - customValue)
    }

    return (

        <View style={styles.controlButtonsContainer}>
            <AppButton
                style={styles.controlButton}
                title='Decrease'
                iconName='minus'
                onPress={decrement}
            />
            <AppButton
                style={styles.controlButton}
                title='Increase'
                iconName='plus'
                onPress={increment}
            />
        </View>
    )
}

export default ControlButtons

const styles = StyleSheet.create({

    controlButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },

    controlButton: {
        width: '48%',
        marginHorizontal: 5
    },


})