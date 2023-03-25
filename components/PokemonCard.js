import { Image, StyleSheet } from "react-native";
import Stats from "./Stats";
import AppCard from "./ui/AppCard";

const PokemonCard = ({
    name,
    category,
    sprite,
    onPress
}) => {

    return (
        <AppCard
            onPress={onPress}
            mode='contained'
            title={name}
            titleVariant='headlineSmall'
            subtitle={`${category} Pokemon`}
            right={() => <Image source={sprite} />}
            rightStyle={styles.cardTitleRightStyle}
            style={styles.cardStyle}
            cardTitleStyle={styles.cardTitleStyle}
            children={<Stats />}
        />
    );
};

export default PokemonCard;

const styles = StyleSheet.create({

    cardStyle: {
        marginVertical: 10,
        paddingHorizontal: 5
    },

    cardTitleStyle: {
        marginVertical: 10
    },

    cardTitleRightStyle: {
        marginRight: 20
    },

})
