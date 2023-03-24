import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import { MovableCard } from '../../components/MovableCard';
import {CARDS} from '../../utils/cards'
import {styles} from './styles';
import { Header } from '../../components/Header';
import { CARD_HEIGHT } from '../../components/CardList';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const Home: React.FC = () => {

    const scrollY = useSharedValue(0);
    const cardPosition = useSharedValue(listToObject(CARDS));


    const handleScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
        
    });

    function listToObject(list: typeof CARDS){
        const listOfCards = Object.values(list);

        const object: any = [];

        listOfCards.forEach((card, index) => { 
            object[card.id] = index;

        });

        return object;

    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle='light-content'/>

        <View style={styles.container}>

            <Header />

        <Animated.ScrollView
            style={styles.scroll}
            contentContainerStyle={{height: CARDS.length * CARD_HEIGHT, paddingHorizontal: 50}}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >

            {
            CARDS.map((item) => (
                <MovableCard 
                    key={item.id}
                    data={item}
                    scrollY={scrollY}
                    cardsPosition={cardPosition}
                    cardsCounter={CARDS.length}
                />
            ))
            }

        </Animated.ScrollView>

        </View>
        </SafeAreaView>

    );

};

export { Home };