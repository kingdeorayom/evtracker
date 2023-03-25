import { Chip } from 'react-native-paper';

const AppChip = ({
    title,
    ...props
}) => {
    return (
        <Chip {...props}>{title}</Chip>
    );
};

export default AppChip;
