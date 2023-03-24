import React from 'react';
import {View, Text} from 'react-native';

import { styles } from './styles'

const Header: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            <Text style={styles.subtitle}>Define a sequênciade bandas {'\n'} que você mais gosta</Text>


        </View>
    );

};

export { Header };