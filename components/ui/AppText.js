import { memo } from "react";
import { Text } from "react-native-paper";

const AppText = ({
    children,
    ...props
}) => {

    console.log('AppText rendered')

    return (
        <Text
            {...props}
        >
            {children}
        </Text>
    );
};

export default memo(AppText);
