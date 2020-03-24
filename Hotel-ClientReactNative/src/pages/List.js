import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SpotList from '../components/SpotList';
import { ScrollView } from 'react-native-gesture-handler';

export default function List({ navigation }){

    const [techs, setTechs] = useState([]);
    
    useEffect(() => {
        async function asyncFunc(){
            
            const storageTechs = (await AsyncStorage.getItem('techs')).split(',');

            setTechs(storageTechs);

        };
        asyncFunc();
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImg} source={require('../assets/logo-black.png')}/>
            </View>
            
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
    
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ededed',
        flex: 1,
    },
    logo: {
        paddingVertical: 15,
        alignItems: 'center',
        alignContent: 'center',
    },
    logoImg: {
        maxWidth: '50%',
        height: 50,
    },


});