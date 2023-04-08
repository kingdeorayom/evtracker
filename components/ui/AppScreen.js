import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { memo } from 'react';

const AppScreen = ({
    children,
    barStyle = 'dark-content',
    backgroundColor = 'white',
    ...props
}) => {

    return (
        <SafeAreaProvider>
            <StatusBar
                style={styles.content}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
                {...props}
            />
            {children}
        </SafeAreaProvider>
    );
};

export default memo(AppScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    content: {
        flex: 1,
    },

});
