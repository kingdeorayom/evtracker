import { Image, StyleSheet } from "react-native";
import CardStats from "./CardStats";
import AppCard from "./ui/AppCard";

const PokemonCard = ({
    item,
    onPress
}) => {

    return (
        <AppCard
            onPress={onPress}
            mode='contained'
            title={item.name}
            titleVariant='headlineSmall'
            subtitle={`${item.category} Pokemon`}
            right={() => <Image source={item.sprite} />}
            rightStyle={styles.cardTitleRightStyle}
            style={styles.cardStyle}
            cardTitleStyle={styles.cardTitleStyle}
            children={<CardStats item={item} />}
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
