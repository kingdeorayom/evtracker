import { Button } from "react-native-paper";

const AppButton = ({
    children,
    title,
    iconName,
    onPress,
    ...props
}) => {
    return (
        <Button
            icon={iconName}
            mode="contained"
            onPress={onPress}
            {...props}
        >
            {title}
        </Button>
    );
};

export default AppButton;
