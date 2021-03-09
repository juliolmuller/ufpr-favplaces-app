import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import mapMarker from '../../assets/map-marker.png'
import { usePlacesApi } from '../../hooks'
import styles from './styles'

function PlacesMap() {
  const { navigate } = useNavigation()
  const { places, fetchAllPlaces } = usePlacesApi()

  function handleMapLongPress(event) {
    const { longitude, latitude } = event.nativeEvent.coordinate

    navigate('PlaceForm', { longitude, latitude })
  }

  function handleMarkerPress(event) {
    Object.keys(event.nativeEvent).forEach((v) => console.log(v))
    console.log(event.nativeEvent.position)
  }

  useFocusEffect(
    useCallback(() => {
      try {
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
          latitude: -25.425,
          longitude: -49.275,
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
            onPress={handleMarkerPress}
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
