import React from 'react';
import { View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { PropsCardList } from './types';
import { HEIGHT, MARGIN_BOTTOM, styles } from './styles';

export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM;

const CardList = ({data} : PropsCardList) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>

            <MaterialIcons 
                name='drag-indicator'
                size={32}
                color='#eee'
            />
        </View>
    );

};

export { CardList };