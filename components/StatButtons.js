import { StyleSheet, View, Pressable } from "react-native";
import AppChip from "./ui/AppChip";
import AppText from "./ui/AppText";

const StatButtons = ({
    stats_buttons,
    selectedStatButtonIndex,
    setSelectedStatButtonIndex,
    setValue
}) => {
    return (
        <View style={styles.statButtonContainer}>
            {
                stats_buttons.map((item, index) => {
                    return index === selectedStatButtonIndex ? (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setSelectedStatButtonIndex(index)
                                setValue(item.value)
                            }}>
                            <AppChip title={item.stat} />
                            <AppText
                                variant='bodyLarge'
                                style={styles.statName}>
                                {item.label}
                            </AppText>
                        </Pressable>
                    ) : (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setSelectedStatButtonIndex(index)
                                setValue(item.value)
                            }}>
                            <AppChip title={item.stat} style={styles.chipUnselected} />
                            <AppText
                                variant='bodyLarge'
                                style={styles.statName}>
                                {item.label}
                            </AppText>
                        </Pressable>
                    )
                })
            }
        </View>
    );
};

export default StatButtons;

const styles = StyleSheet.create({

    statButtonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },

    chipUnselected: {
        backgroundColor: "#f5f5f5",
    }


})
