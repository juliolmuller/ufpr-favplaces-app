import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import Constants from 'expo-constants'
import { usePlacesApi } from '../../hooks'
import mapMarker from '../../assets/map-marker.png'
import styles from './styles'

const DEFAULT_LATITUDE = Number(Constants.manifest.extra.DEFAULT_LATITUDE)
const DEFAULT_LONGITUDE = Number(Constants.manifest.extra.DEFAULT_LONGITUDE)

function PlacesMap() {
  const { navigate } = useNavigation()
  const [location, setLocation] = useState(null)
  const { places, fetchAllPlaces } = usePlacesApi()

  async function getUserLocation() {
    const { status } = await Location.requestPermissionsAsync()

    if (status === 'granted') {
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      })

      setLocation(currentLocation.coords)
    }
  }

  function handleMapLongPress(event) {
    const { longitude, latitude } = event.nativeEvent.coordinate

    navigate('PlaceForm', { longitude, latitude })
  }

  useFocusEffect(
    useCallback(() => {
      try {
        getUserLocation()
        fetchAllPlaces()
      } catch (err) {
        console.warn(err)
        alert(err.message)
      }
    }, []),
  )

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapPadding={{ right: 120 }}
        onLongPress={handleMapLongPress}
        initialRegion={{
          latitude: location?.latitude ?? DEFAULT_LATITUDE,
          longitude: location?.longitude ?? DEFAULT_LONGITUDE,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <For each="place" of={places}>
          <Marker
            key={place.id}
            icon={mapMarker}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            calloutAnchor={{ x: 2.7, y: 0.8 }}
          >
            <Callout tooltip onPress={() => navigate('PlaceDetails', place)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{place.name}</Text>
              </View>
            </Callout>
          </Marker>
        </For>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {places.length} lugares marcados
        </Text>
        <MaterialIcons name="stars" size={24} color="#fff" />
      </View>
    </View>
  )
}

export default PlacesMap
