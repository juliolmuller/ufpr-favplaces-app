import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'
import { usePlacesApi } from '../../hooks'
import styles from './styles'

function PlaceForm() {
  const place = useRoute().params
  const { navigate } = useNavigation()
  const { savePlace } = usePlacesApi()

  const [name, setName] = useState(place.name ?? '')
  const [about, setAbout] = useState(place.about ?? '')
  const [photos, setPhotos] = useState(place.photos ?? [])

  async function handleBrowsePhoto() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      alert('Ops! Você precisa fornecer uma foto para cadastra o orfanato.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setPhotos([...photos, result.uri])
    }
  }

  async function handleFormSubmit() {
    try {
      await savePlace({ ...place, name, about, photos })

      navigate('PlacesMap')
    } catch (error) {
      console.error(error, { ...error })
      alert('Falha ao tentar salvar os dados. Tente novamente mais tarde.')
    }
  }

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, styles.inputMulti]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Text style={styles.label}>Fotos</Text>
      <View style={styles.selectedPhotosContainer}>
        <For each="photo" index="index" of={place.photos}>
          <Image
            key={index}
            style={styles.selectedPhoto}
            source={{ uri: photo }}
          />
        </For>
      </View>
      <TouchableOpacity style={styles.photosInput} onPress={handleBrowsePhoto}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <RectButton
        style={[styles.submitBtn, name ? styles.btnEnabled : styles.btnDisabled]}
        onPress={handleFormSubmit}
        enabled={Boolean(name)}
      >
        <Text style={styles.SubmitBtnText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

export default PlaceForm
