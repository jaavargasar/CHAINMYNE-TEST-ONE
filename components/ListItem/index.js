import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const getMoneyFormat = (number) => {
    return Math.round(number * 100) / 100;
};

const ListItem = ({ item, onRefresh }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{`Name: ${item.id}`}</Text>
                <Text
                    style={styles.text}
                >{`Symbol: ${item.symbol.toUpperCase()}`}</Text>
                <Text style={styles.text}>{`Currency: CAD`}</Text>
                <Text style={styles.text}>{`Price: ${getMoneyFormat(
                    item.current_price
                )}$`}</Text>
                <Text style={styles.text}>{`Market Cap: ${getMoneyFormat(
                    item.market_cap
                )}$`}</Text>
                <Text style={styles.text}>{`Price Change 24H: ${getMoneyFormat(
                    item.price_change_24h
                )}$`}</Text>
            </View>

            <TouchableOpacity onPress={onRefresh} style={styles.button}>
                <Icon
                    name="refresh"
                    size={24}
                    color="#007BFF"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    text: {
        fontSize: 16,
    },
    textContainer: {
        flexDirection: 'column',
        width: '65%',
        paddingLeft: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        height: 50,
    },
    icon: {
        marginLeft: 0,
    },
});

export default ListItem;
