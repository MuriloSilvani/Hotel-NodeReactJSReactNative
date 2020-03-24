import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import api from '../services/api';
import { placeholder } from '@babel/types';

export default function SpotList({ tech }){
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function loadPlaces(){
            const response = await api.get('/listPlace', {
                params: { tech }
            });
            setLocais(response.data.places);
        };
        loadPlaces();
    },[]);

    return (
        <View style={styles.list}>

            <View style={styles.itemList}>
                <Text style={styles.title}>
                    {tech}
                </Text>

                <FlatList
                data={locais}
                horizontal
                showHorizontalIndicators={false}
                renderItem={({ item }) => (
                    <View style={styles.content}>
                        <Image style={styles.logo} source={{uri : 'https://abrilexame.files.wordpress.com/2016/11/nova-forma-de-vida-indica-como-poderc3a3o-ser-os-ets.jpg'}}/>
                        <Text>
                            {item.name}
                        </Text>
                        <Text>
                            {item.techs}
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.btn}>
                                book
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                >
                </FlatList>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,  
    },
    itemList: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 5,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,     
    },
    btn:{

    },
    logo: {
        height: 200,
    },
});