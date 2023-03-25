import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import PokemonCard from "./PokemonCard";

const YieldCard = ({
    item,
    onPress,
}) => {

    return (
        <PokemonCard
            item={item}
            onPress={onPress}
        />
    )
}

const YieldCards = ({ navigation, data }) => {

    const renderYieldCards = ({ item, index }) => {

        return (
            <YieldCard
                item={item}
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
                keyExtractor={(item) => item.id}
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