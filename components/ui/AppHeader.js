import { Appbar } from 'react-native-paper';

const AppHeader = ({ navigation, back, route }) => {

    const _goBack = () => navigation.pop();

    const _handleTheme = () => console.log('Go to change theme');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={_goBack} /> : null}
            <Appbar.Content title={route.params.title} />
            {route.name === 'Home' ? <Appbar.Action icon="palette-outline" onPress={_handleTheme} /> : null}
            {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        </Appbar.Header>
    )
}

export default AppHeader