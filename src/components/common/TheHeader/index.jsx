import React from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { usePlacesApi } from '../../../hooks'
import styles from './styles'

function TheHeader({ title, deleteBtn, editBtn }) {
  const { goBack, navigate } = useNavigation()
  const { deletePlace } = usePlacesApi()
  const place = useRoute().params

  function handleDelete() {
    deletePlace(place.id)
    navigate('PlacesMap')
  }

  function handleEdit() {
    navigate('PlaceForm', place)
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      <Choose>
        <When condition={place?.id && deleteBtn}>
          <BorderlessButton onPress={handleDelete}>
            <Feather name="trash-2" size={24} color="#ff669d" />
          </BorderlessButton>
        </When>
        <When condition={place?.id && editBtn}>
          <BorderlessButton onPress={handleEdit}>
            <Feather name="edit-2" size={24} color="#15b5d6" />
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
