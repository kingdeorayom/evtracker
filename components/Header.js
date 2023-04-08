import { memo, useCallback, useState } from 'react'
import { Alert } from 'react-native';
import { Appbar, Divider, Menu } from 'react-native-paper'

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
            'This will set every stat counter to 0.',
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

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header>
            <Appbar.Content title="" />
            <Appbar.Action icon="cached" onPress={_handleAlert} />
            {/* <Menu
                anchorPosition='bottom'
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={(openMenu)} />}>
                <Menu.Item onPress={() => { }} title="Change Theme" />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="About" />
            </Menu> */}
        </Appbar.Header>
    )
}

export default memo(Header)