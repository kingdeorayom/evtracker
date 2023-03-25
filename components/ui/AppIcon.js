import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppIcon = ({
    iconName,
    iconColor,
    iconSize,
}) => {
    return <MaterialCommunityIcons name={iconName} color={iconColor} size={iconSize} />;
};

export default AppIcon;
