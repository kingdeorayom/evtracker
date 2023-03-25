import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import PokemonCard from "./PokemonCard";

const YieldCard = ({
    name,
    category,
    sprite,
    onPress,
}) => {
    return (
        <PokemonCard
            name={name}
            category={category}
            sprite={sprite}
            onPress={onPress}
        />
    )
}

const YieldCards = ({ navigation, data }) => {

    const renderYieldCards = ({ item, index }) => {

        return (
            <YieldCard
                name={item.name}
                category={item.category}
                sprite={item.sprite}
                onPress={() =>
                    navigation.navigate("YieldStack", {
                        screen: "Detail",
                        params: {
                            id: item.id,
                            index: index
                        },
                    })
                }
            />
        )
    }

    return (
        <View style={styles.cardContainer}>
            <FlashList
                estimatedItemSize={140}
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={renderYieldCards}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

};

const styles = StyleSheet.create({

    cardContainer: {
        height: '100%'
    }

})

export default YieldCards;