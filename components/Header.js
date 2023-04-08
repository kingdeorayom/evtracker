import { memo, useCallback } from 'react'
import { Alert } from 'react-native';
import { Appbar } from 'react-native-paper'

const Header = ({
    setHp,
    setAttack,
    setDefense,
    setSpecialAttack,
    setSpecialDefense,
    setSpeed,
}) => {

    const _handleReset = useCallback(() => {
        setHp(0)
        setAttack(0)
        setDefense(0)
        setSpecialAttack(0)
        setSpecialDefense(0)
        setSpeed(0)
    }, [setHp, setAttack, setDefense, setSpecialAttack, setSpecialDefense, setSpeed])

    const _handleAlert = () => {
        Alert.alert(
            'Are you sure you want to reset all tracked EVs?',
            'This will set all Stat Counters to 0.',
            [
                {
                    text: 'Yes',
                    onPress: _handleReset
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
            ],
            {
                cancelable: true
            }
        );
    }

    return (
        <Appbar.Header>
            <Appbar.Content title="" />
            <Appbar.Action icon="cached" onPress={_handleAlert} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log("Hello")} />
        </Appbar.Header>
    )
}

export default memo(Header)