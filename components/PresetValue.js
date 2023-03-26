import { StyleSheet, View, Pressable } from "react-native";
import AppChip from "./ui/AppChip";

const PresetValue = ({
    preset_value_buttons,
    selectedPresetValueIndex,
    setSelectedPresetValueIndex,
    setCustomValue
}) => {
    return (
        <View style={styles.presetValueContainer}>
            {
                preset_value_buttons.map((item, index) => {
                    return index === selectedPresetValueIndex ? (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setSelectedPresetValueIndex(index)
                                setCustomValue(item.value)
                            }}>
                            <AppChip title={item.label} />
                        </Pressable>
                    ) : (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setSelectedPresetValueIndex(index)
                                setCustomValue(item.value)
                            }}>
                            <AppChip
                                title={item.label}
                                style={styles.chipUnselected}
                            />
                        </Pressable>
                    )
                })
            }
        </View>
    );
};

export default PresetValue;

const styles = StyleSheet.create({

    presetValueContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 10
    },

    chipUnselected: {
        backgroundColor: "#f5f5f5",
    }

})
