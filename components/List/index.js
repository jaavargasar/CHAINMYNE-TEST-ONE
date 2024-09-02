import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

import ListItem from '../ListItem';

const List = () => {
    const [coinList, setCoinList] = useState([]);

    const { COIN_GECKO_API_KEY, COIN_GECKO_API } = Constants.expoConfig.extra;

    const showError = () => {
        Alert.alert(
            'Error',
            'There was an error getting the crypto currency data from Gecko API. Please close and open the app again',
            [
                {
                    text: 'OK',
                    onPress: () => {},
                },
            ],
            { cancelable: false }
        );
    };

    const getCoinsDataMarket = async () => {
        try {
            const apiClient = axios.create({
                baseURL: COIN_GECKO_API,
                headers: {
                    'x-cg-demo-api-key': COIN_GECKO_API_KEY,
                    Accept: 'application/json',
                },
            });

            const coinGeckoResult = await apiClient.get(
                `/coins/markets?vs_currency=cad&per_page=5&precision=2&order=market_cap_desc`
            );

            if (coinGeckoResult && coinGeckoResult.status !== 200) {
                showError();
            }

            setCoinList(coinGeckoResult.data);
        } catch (error) {
            showError();
        }
    };

    useEffect(() => {
        if (coinList && coinList.length === 0) {
            getCoinsDataMarket();
        }
    }, [coinList]);

    const renderItem = ({ item }) => (
        <ListItem item={item} onRefresh={() => getCoinsDataMarket()} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={coinList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 79,
    },
});

export default List;
