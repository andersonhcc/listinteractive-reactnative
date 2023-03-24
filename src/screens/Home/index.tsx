import React from 'react';
import {View, ScrollView} from 'react-native';
import { CardList } from '../../components/CardList';
import {CARDS} from '../../utils/cards'
import {styles} from './styles';

const Home: React.FC = () => {
    return (
        <View>

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
    );

};

export { Home };