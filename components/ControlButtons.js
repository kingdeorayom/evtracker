import { StyleSheet, View } from 'react-native'
import AppButton from './ui/AppButton'
import { memo, useCallback } from 'react'
import AppText from './ui/AppText'

const ControlButtons = ({
    increment,
    decrement,

    // value,
    // customValue,

    // selectedStatButtonIndex,
    // selectedPresetValueIndex,

    // setHp,
    // setAttack,
    // setDefense,
    // setSpecialAttack,
    // setSpecialDefense,
    // setSpeed,
}) => {

    console.log('4. ControlButtons Rendered')

    // const increment = useCallback(() => {
    //     if (value === 'hp')
    //         setHp(previousValue => previousValue + customValue)
    //     else if (value === 'atk')
    //         setAttack(previousValue => previousValue + customValue)
    //     else if (value === 'def')
    //         setDefense(previousValue => previousValue + customValue)
    //     else if (value === 'spa')
    //         setSpecialAttack(previousValue => previousValue + customValue)
    //     else if (value === 'spd')
    //         setSpecialDefense(previousValue => previousValue + customValue)
    //     else if (value === 'spe')
    //         setSpeed(previousValue => previousValue + customValue)
    // }, [selectedPresetValueIndex, selectedStatButtonIndex])

    // const decrement = useCallback(() => {
    //     if (value === 'hp')
    //         setHp(previousValue => previousValue - customValue)
    //     else if (value === 'atk')
    //         setAttack(previousValue => previousValue - customValue)
    //     else if (value === 'def')
    //         setDefense(previousValue => previousValue - customValue)
    //     else if (value === 'spa')
    //         setSpecialAttack(previousValue => previousValue - customValue)
    //     else if (value === 'spd')
    //         setSpecialDefense(previousValue => previousValue - customValue)
    //     else if (value === 'spe')
    //         setSpeed(previousValue => previousValue - customValue)
    // }, [selectedPresetValueIndex, selectedStatButtonIndex])

    return (

        <View style={styles.controlButtonsContainer}>
            <AppButton
                style={styles.controlButton}
                title='Increase'
                iconName='plus'
                onPress={increment}
                theme={{
                    // roundness: 1.5,
                    // colors: { primary: 'rgb(255, 218, 212)', onPrimary: 'black' }
                }}
            />
            <AppButton
                style={styles.controlButton}
                title='Decrease'
                iconName='minus'
                onPress={decrement}
                theme={{
                    // roundness: 1.5,
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
        marginVertical: 10
    },

    controlButton: {
        width: '90%',
        // marginHorizontal: 5,
        marginVertical: 7
    },


})