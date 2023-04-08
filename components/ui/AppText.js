import { memo } from "react";
import { Text } from "react-native-paper";

const AppText = ({
    children,
    ...props
}) => {

    return (
        <Text
            {...props}
        >
            {children}
        </Text>
    );
};

export default memo(AppText);
