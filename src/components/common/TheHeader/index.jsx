import React from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

function TheHeader({ title, cancelBtn }) {
  const { goBack, navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      <Choose>
        <When condition={cancelBtn}>
          <BorderlessButton onPress={() => navigate('OrphanagesMap')}>
            <Feather name="x" size={24} color="#ff669d" />
          </BorderlessButton>
        </When>
        <Otherwise>
          <View />
        </Otherwise>
      </Choose>
    </View>
  )
}

export default TheHeader
