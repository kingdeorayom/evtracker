import { Card } from 'react-native-paper';

const AppCard = ({
    mode,
    children,
    title,
    titleVariant,
    subtitle,
    style,
    right,
    rightStyle,
    cardTitleStyle,
    onPress,
    ...props
}) => {
    return (
        <Card
            mode={mode}
            onPress={onPress}
            style={style}
            {...props}
        >
            <Card.Title
                title={title}
                titleVariant={titleVariant}
                subtitle={subtitle}
                right={right}
                rightStyle={rightStyle}
                style={cardTitleStyle}
            />
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    );
};

export default AppCard;
