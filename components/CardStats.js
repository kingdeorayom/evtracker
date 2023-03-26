import { StyleSheet, View } from "react-native";
import AppChip from "./ui/AppChip";
import AppText from "./ui/AppText";

const CardStats = ({ item }) => {

    return (
        <View style={styles.statContainer}>
            <View>
                <AppChip
                    title={item.yield[0].hp}
                    textStyle={item.yield[0].hp > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>HP</AppText>
            </View>
            <View>
                <AppChip
                    title={item.yield[0].atk}
                    textStyle={item.yield[0].atk > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>Atk</AppText>
            </View>
            <View>
                <AppChip
                    title={item.yield[0].def}
                    textStyle={item.yield[0].def > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>Def</AppText>
            </View>
            <View>
                <AppChip
                    title={item.yield[0].spa}
                    textStyle={item.yield[0].spa > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>SpA</AppText>
            </View>
            <View>
                <AppChip
                    title={item.yield[0].spd}
                    textStyle={item.yield[0].spd > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>SpD</AppText>
            </View>
            <View>
                <AppChip
                    title={item.yield[0].spe}
                    textStyle={item.yield[0].spe > 0 ? styles.bold : null}
                />
                <AppText style={styles.statName}>Spe</AppText>
            </View>
        </View>
    );
};

export default CardStats;

const styles = StyleSheet.create({

    statContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    statName: {
        alignSelf: 'center',
    },

    bold: {
        fontWeight: '700',
        color: 'green'
    }

})
