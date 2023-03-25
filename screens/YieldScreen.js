import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { AppScreen, AppButton, AppText } from '../components';
import { Surface, Card, Avatar, IconButton, Chip } from 'react-native-paper';

const YieldScreen = ({ navigation }) => {

    return (
        <AppScreen>
            <View style={styles.container}>

                <Card
                    mode='contained'
                    onPress={() => navigation.navigate('Detail')}
                >
                    <Card.Title
                        title="Bulbasaur"
                        subtitle="Seed Pokemon"
                        titleVariant='headlineMedium'
                    />
                    <Card.Content>
                    </Card.Content>
                </Card>

            </View>
        </AppScreen>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15
    },

});

export default YieldScreen
