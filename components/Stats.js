import { StyleSheet, View } from "react-native";
import AppChip from "./ui/AppChip";
import AppText from "./ui/AppText";

const Stats = () => {
    return (
        <View style={styles.statContainer}>
            <View>
                <AppChip title='0' />
                <AppText variant='bodySmall' style={styles.statName}>HP</AppText>
            </View>
            <View>
                <AppChip title='0' />
                <AppText style={styles.statName}>Atk</AppText>
            </View>
            <View>
                <AppChip title='0' />
                <AppText style={styles.statName}>Def</AppText>
            </View>
            <View>
                <AppChip title='0' />
                <AppText style={styles.statName}>SpA</AppText>
            </View>
            <View>
                <AppChip title='0' />
                <AppText style={styles.statName}>SpD</AppText>
            </View>
            <View>
                <AppChip title='0' />
                <AppText style={styles.statName}>Spe</AppText>
            </View>
        </View>
    );
};

export default Stats;

const styles = StyleSheet.create({

    statContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    statName: {
        alignSelf: 'center',
    }

})
