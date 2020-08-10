import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
// import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children })=>{
    const {navigate} = useNavigation()

    function handleGoBack(){
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                
                <BorderlessButton onPress={handleGoBack}>
                    <Ionicons name="ios-arrow-back" size={25} color='#fff'/>
                    {/* <Image source={backIcon} resizeMode='contain' /> */}
                </BorderlessButton>

                <Image source={logoImg} resizeMode='contain'/>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader