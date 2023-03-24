import React from 'react';
import { View, Text} from 'react-native';
import { styles } from './styles'
import {MaterialIcons} from '@expo/vector-icons'
import { PropsCardList } from './types';

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