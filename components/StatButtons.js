import { StyleSheet, View, Pressable } from "react-native";
import AppChip from "./ui/AppChip";
import AppText from "./ui/AppText";
import { memo } from "react";

const StatButtons = ({
    selectedStatButtonIndex,
    setSelectedStatButtonIndex,
    setValue,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed
}) => {

    console.log('2. StatButtons Rendered')

    const stats_buttons = [
        { value: 'hp', label: 'HP', stat: hp },
        { value: 'atk', label: 'Atk', stat: attack },
        { value: 'def', label: 'Def', stat: defense },
        { value: 'spa', label: 'SpA', stat: specialAttack },
        { value: 'spd', label: 'SpD', stat: specialDefense },
        { value: 'spe', label: 'Spe', stat: speed },
    ]

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
                            }}
                        >
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
                            }}
                        >
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

export default memo(StatButtons);

const styles = StyleSheet.create({

    statButtonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        borderWidth: .5
    },

    statName: {
        textAlign: 'center',
        fontWeight: '700'
    },

    chipUnselected: {
        backgroundColor: "#f5f5f5",
    }


})
