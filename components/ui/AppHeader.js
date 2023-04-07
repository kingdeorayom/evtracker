import { Appbar } from 'react-native-paper';

const AppHeader = ({ navigation, back, route }) => {

    const _goBack = () => navigation.pop();

    const _handleReset = () => console.log('Go to change theme');

    const _handleTheme = () => console.log('Shown more');

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={_goBack} /> : null}
            <Appbar.Content title={route.params.title} />
            {route.name === 'Home' ? <Appbar.Action icon="cached" onPress={_handleReset} /> : null}
            {route.name === 'About' ? <Appbar.Action icon="palette-outline" onPress={_handleTheme} /> : null}
        </Appbar.Header>
    )
}

export default AppHeader