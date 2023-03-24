import React from 'react';
import {View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import { CardList } from '../../components/CardList';
import {CARDS} from '../../utils/cards'
import {styles} from './styles';
import { Header } from '../../components/Header';

const Home: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle='light-content'/>

        <View style={styles.container}>

            <Header />

        <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
        >

            {
            CARDS.map((item) => (
                <CardList 
                    key={item.id}
                    data={item}
                />
            ))
            }

        </ScrollView>

        </View>
        </SafeAreaView>

    );

};

export { Home };