import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { AppBrand, ControlButtons, Header, Instruction, PresetValue, StatButtons } from '../components'
import theme from '../config/theme';

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
        switch (value) {
            case 'hp':
                setHp(previousValue => previousValue + customValue)
                break;
            case 'atk':
                setAttack(previousValue => previousValue + customValue)
                break;
            case 'def':
                setDefense(previousValue => previousValue + customValue)
                break;
            case 'spa':
                setSpecialAttack(previousValue => previousValue + customValue)
                break;
            case 'spd':
                setSpecialDefense(previousValue => previousValue + customValue)
                break;
            case 'spe':
                setSpeed(previousValue => previousValue + customValue)
                break;
            default:
                break;
        }
    }, [selectedStatButtonIndex, selectedPresetValueIndex])

    const decrement = useCallback(() => {
        switch (value) {
            case 'hp':
                setHp(previousValue => previousValue - customValue)
                break;
            case 'atk':
                setAttack(previousValue => previousValue - customValue)
                break;
            case 'def':
                setDefense(previousValue => previousValue - customValue)
                break;
            case 'spa':
                setSpecialAttack(previousValue => previousValue - customValue)
                break;
            case 'spd':
                setSpecialDefense(previousValue => previousValue - customValue)
                break;
            case 'spe':
                setSpeed(previousValue => previousValue - customValue)
                break;
            default:
                break;
        }
    }, [selectedStatButtonIndex, selectedPresetValueIndex])

    return (
        <ScrollView style={styles.container}>

            <Header
                setHp={setHp}
                setAttack={setAttack}
                setDefense={setDefense}
                setSpecialAttack={setSpecialAttack}
                setSpecialDefense={setSpecialDefense}
                setSpeed={setSpeed}
            />

            <AppBrand />

            <Instruction title='Select a Stat to modify, then choose an increment or decrement value below.' />

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

            <Instruction title='Select increment or decrement value.' />

            <PresetValue
                selectedPresetValueIndex={selectedPresetValueIndex}
                setSelectedPresetValueIndex={setSelectedPresetValueIndex}
                setCustomValue={setCustomValue}
            />

            <ControlButtons increment={increment} decrement={decrement} />

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },

    content: {
        flex: 1,
    },

});
