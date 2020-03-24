import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('murilo.silvani@gmail.com');
    const [techs, setTechs] = useState('Tech1');

    useEffect(() => {
        async () => {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                navigation.navigate('List');
                console.log("teste");
            };
        };
    }, []);

    async function handleLogin() {
        const response = await api.post('newUser', {
            email: email,
            password: 'Pass static',
            name: 'Nome static'
        });
        if (response.data.user) {
            await AsyncStorage.setItem('user', response.data.user._id);
            await AsyncStorage.setItem('techs', techs);

            navigation.navigate('List');
        };
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-black.png')} />

            <View style={styles.form}>
                <Text style={styles.label}>
                    Email: *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Seu email"
                    placeholdertextcolor='#ddd'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                {/* <Text style={styles.label}>
                    Senha: *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Sua Senha"
                    placeholdertextcolor='#ddd'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                /> */}

                <Text style={styles.label}>
                    Techs:
                </Text>
                <TextInput style={styles.input}
                    placeholder="Techs interesse"
                    placeholdertextcolor='#ddd'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleLogin}
                >
                    <Text style={styles.btntext}>
                        Encontrar Locais
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        maxWidth: '80%',
        height: 80,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginBottom: 10,
    },
    btn: {
        marginTop: 10,
        backgroundColor: '#050505',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
    },
    btntext: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },

});