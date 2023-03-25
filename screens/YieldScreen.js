import { useCallback, useState } from 'react';
import { RefreshControl, StyleSheet, ScrollView } from 'react-native';
import { AppScreen, AppText, ScreenTitle, SearchFilter, YieldCards } from '../components';
import { Searchbar } from 'react-native-paper';
import pokemon from '../data/pokemon'

const YieldScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <AppScreen>
            <ScrollView
                style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >

                <ScreenTitle title='EV Yield' />
                <Searchbar placeholder="Search for a Pokémon" style={styles.searchbar} />
                <SearchFilter />
                <AppText style={styles.instruction}>
                    Use Search or choose one of the filters above, then tap on a Pokémon to view more information
                </AppText>
                <YieldCards
                    data={pokemon}
                    navigation={navigation}
                />
            </ScrollView>
        </AppScreen>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
    },

    instruction: {
        marginVertical: 10,
    },

    searchbar: {
        marginBottom: 10
    }

});

export default YieldScreen
