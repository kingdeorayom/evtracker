import { StyleSheet, View } from "react-native";
import AppChip from "./ui/AppChip";

const SearchFilter = () => {
    return (
        <View style={styles.chipContainer}>
            <AppChip title='HP' style={styles.chip} />
            <AppChip title='Attack' style={styles.chip} />
            <AppChip title='Defense' style={styles.chip} />
            <AppChip title='Sp. Attack' style={styles.chip} />
            <AppChip title='Sp. Defense' style={styles.chip} />
            <AppChip title='Speed' style={styles.chip} />
        </View>
    );
};

export default SearchFilter;

const styles = StyleSheet.create({

    statContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    statName: {
        alignSelf: 'center',
    },

    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5
    },

    chip: {
        marginRight: 5,
        marginVertical: 5
    }

})
