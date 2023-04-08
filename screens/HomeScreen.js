import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { AppScreen, AppText, AppBrand, PresetValue, ControlButtons, StatButtons } from '../components';

const HomeScreen = () => {

    const [value, setValue] = useState('hp');
    const [customValue, setCustomValue] = useState(1);

    const [hp, setHp] = useState(0)
    const [attack, setAttack] = useState(0)
    const [defense, setDefense] = useState(0)
    const [specialAttack, setSpecialAttack] = useState(0)
    const [specialDefense, setSpecialDefense] = useState(0)
    const [speed, setSpeed] = useState(0)

    const [selectedStatButtonIndex, setSelectedStatButtonIndex] = useState(0);
    const [selectedPresetValueIndex, setSelectedPresetValueIndex] = useState(0);

    const increment = useCallback(() => {
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
    }, [selectedPresetValueIndex, selectedStatButtonIndex])

    const decrement = useCallback(() => {
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
    }, [selectedPresetValueIndex, selectedStatButtonIndex])

    return (
        <AppScreen>
            <ScrollView style={styles.container}>

                {/* <AppBrand marginTop={0} marginBottom={30} /> */}

                <AppText variant='titleLarge'>Choose Stat</AppText>

                <AppText variant='bodyLarge' style={styles.instruction}>
                    Select a Stat to modify, then choose an increment or decrement value below
                </AppText>

                <StatButtons
                    selectedStatButtonIndex={selectedStatButtonIndex}
                    setSelectedStatButtonIndex={setSelectedStatButtonIndex}
                    setValue={setValue}
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    specialAttack={specialAttack}
                    specialDefense={specialDefense}
                    speed={speed}
                />

                <AppText variant='titleLarge'>Preset Value</AppText>

                <AppText variant='bodyLarge' style={styles.instruction}>
                    Select increment or decrement value
                </AppText>

                <PresetValue
                    selectedPresetValueIndex={selectedPresetValueIndex}
                    setSelectedPresetValueIndex={setSelectedPresetValueIndex}
                    setCustomValue={setCustomValue}
                />

                {/* <Divider style={styles.divider} /> */}

                <ControlButtons
                    increment={increment}
                    decrement={decrement}
                // value={value}
                // customValue={customValue}
                // selectedStatButtonIndex={selectedStatButtonIndex}
                // selectedPresetValueIndex={selectedPresetValueIndex}
                // setHp={setHp}
                // setAttack={setAttack}
                // setDefense={setDefense}
                // setSpecialAttack={setSpecialAttack}
                // setSpecialDefense={setSpecialDefense}
                // setSpeed={setSpeed}
                />

            </ScrollView>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15
    },

    instruction: {
        marginVertical: 10,
        color: '#808080',
        fontSize: 14
    },

    divider: {
        marginVertical: 5
    },

});

export default HomeScreen
