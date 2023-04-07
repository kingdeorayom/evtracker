import { StyleSheet, View, Pressable } from "react-native";
import AppChip from "./ui/AppChip";
import { memo } from "react";

const PresetValue = ({
    selectedPresetValueIndex,
    setSelectedPresetValueIndex,
    setCustomValue
}) => {

    console.log('3. PresetValue Rendered')

    const preset_value_buttons = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 6, label: '6' },
        // { value: 8, label: '8' },
        { value: 12, label: '12' },
    ]

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
                            }}
                        >
                            <AppChip
                                title={item.label}
                                textStyle={styles.chipTextStyle}
                            />
                        </Pressable>
                    ) : (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setSelectedPresetValueIndex(index)
                                setCustomValue(item.value)
                            }}
                        >
                            <AppChip
                                title={item.label}
                                style={styles.chipUnselected}
                                textStyle={styles.chipTextStyle}
                            />
                        </Pressable>
                    )
                })
            }
        </View>
    );
};

export default memo(PresetValue);

const styles = StyleSheet.create({

    presetValueContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        borderColor: '#d3d3d3',
        borderWidth: .5
    },

    chipUnselected: {
        backgroundColor: "#f5f5f5",
    },

    chipTextStyle: {
        fontWeight: '700'
    }

})
