import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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

    const stats_buttons = [
        { value: 'hp', label: 'HP', stat: hp },
        { value: 'atk', label: 'Atk', stat: attack },
        { value: 'def', label: 'Def', stat: defense },
        { value: 'spa', label: 'SpA', stat: specialAttack },
        { value: 'spd', label: 'SpD', stat: specialDefense },
        { value: 'spe', label: 'Spe', stat: speed },
    ]

    const preset_value_buttons = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 4, label: '4' },
        { value: 6, label: '6' },
        { value: 8, label: '8' },
        { value: 12, label: '12' },
    ]

    const [selectedStatButtonIndex, setSelectedStatButtonIndex] = useState(0);
    const [selectedPresetValueIndex, setSelectedPresetValueIndex] = useState(0);

    return (
        <AppScreen>
            <View style={styles.container}>

                <AppBrand marginTop={10} marginBottom={30} />

                <AppText variant='titleLarge'>Choose Stat</AppText>

                <AppText variant='bodyLarge' style={styles.instruction}>
                    Select a Stat to modify, then choose an increment or decrement value below
                </AppText>

                <StatButtons
                    stats_buttons={stats_buttons}
                    selectedStatButtonIndex={selectedStatButtonIndex}
                    setSelectedStatButtonIndex={setSelectedStatButtonIndex}
                    setValue={setValue}
                />

                <AppText variant='titleLarge'>Preset Value</AppText>

                <AppText variant='bodyLarge' style={styles.instruction}>
                    Select increment or decrement value
                </AppText>

                <PresetValue
                    preset_value_buttons={preset_value_buttons}
                    selectedPresetValueIndex={selectedPresetValueIndex}
                    setSelectedPresetValueIndex={setSelectedPresetValueIndex}
                    setCustomValue={setCustomValue}
                />

                <Divider style={styles.divider} />

                <ControlButtons
                    value={value}
                    customValue={customValue}
                    setHp={setHp}
                    setAttack={setAttack}
                    setDefense={setDefense}
                    setSpecialAttack={setSpecialAttack}
                    setSpecialDefense={setSpecialDefense}
                    setSpeed={setSpeed}
                />

            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15
    },

    instruction: {
        marginVertical: 10
    },

    divider: {
        marginVertical: 20
    },

});

export default HomeScreen
