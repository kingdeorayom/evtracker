import { View } from "react-native";
import AppText from "./AppText";

const AppButton = ({
    title
}) => {
    return (
        <View style={{ marginVertical: 20 }}>
            <AppText variant='displaySmall'>{title}</AppText>
        </View>
    );
};

export default AppButton;
