import { memo } from 'react';
import { Chip } from 'react-native-paper';

const AppChip = ({
    title,
    ...props
}) => {

    return (
        <Chip {...props}>{title}</Chip>
    );
};

export default memo(AppChip);
