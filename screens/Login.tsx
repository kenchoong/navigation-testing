import React from 'react'
import { View, Text } from 'react-native'
import { useRouting } from 'expo-next-react-navigation'

//import { useNavigation } from '@react-navigation/native';


interface LoginProps {

}

export const Login: React.FC<LoginProps> = ({ }) => {
    const { navigate } = useRouting()

    const onPress = () => navigate({
        routeName: 'SignUp'
    })

    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    );
}