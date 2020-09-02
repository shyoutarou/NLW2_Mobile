import React, { useState, useEffect } from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'

import api from '../../services/api'

import landingImg from '../../../assets/images/landing.png'
import studyIcon from '../../../assets/images/icons/study.png'
import giveClassesIcon from '../../../assets/images/icons/give-classes.png'
import heartIcon from '../../../assets/images/icons/heart.png'
import logOutIcon from "../../../assets/images/icons/log-out-icon.png";
import { useCustomHookAuth } from "../../contexts/auth";

import styles from './styles'

function Landing(){

    const {navigate} = useNavigation();
    const { user, signOut } = useCustomHookAuth();

    async function handleNavigateToGiveClassesPage(){

        navigate('GiveClasses');
    }

    async function handleNavigateToStudyPages(){
        navigate('Study')
    }

    function handleLogOutPress() {
        return signOut();
    }

    function handleProfilePress() {
        return navigate('Profile');
    }

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
      api.get('connections').then(response => {
        const { total } = response.data;
        // console.log(total);
        setTotalConnections(total);
      });
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <BorderlessButton onPress={handleProfilePress}>
                    <Image
                        source={{
                        uri:
                            user?.avatar ||
                            "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
                        }}
                        style={styles.avatarImg}
                    />
                    </BorderlessButton>
                    <Text style={styles.profileName}>{user?.name}</Text>
                </View>
                <BorderlessButton onPress={handleLogOutPress}>
                    <Text >Sair</Text>
                    <Image 
                        source={logOutIcon}
                    />
                </BorderlessButton>
            </View>

            <View style={styles.topContainer}>
                <Image source={landingImg} style={styles.banner} />
            </View>            
            
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer ??</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton onPress={handleNavigateToStudyPages} 
                        style={[styles.button, styles.buttonPrimary]}>
                        <Image source={studyIcon} />
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>
                    <RectButton onPress={handleNavigateToGiveClassesPage}
                        style={[styles.button, styles.buttonSecondary]}>
                        <Image source={giveClassesIcon} />
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                </View>

                <Text style={styles.totalConnections}>
                    Total de {totalConnections} conexões já realizadas {' '}
                    <Image source={heartIcon}/>
                </Text>
            </View>    
        </View>
    );
}
export default Landing;