import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import mapMarker from '../../assets/map-marker.png'
import http from '../../services/http'
import styles from './styles'

function PlacesMap() {
  const { navigate } = useNavigation()
  const [places, setPlaces] = useState([])

  const fetchPlaces = async () => {
    try {
      const { data } = await http.get('/places')
      setPlaces(data)
    } catch (err) {
      alert(err.message)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPlaces()
    }, []),
  )

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -25.425,
          longitude: -49.275,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {places.map((place) => (
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
        ))}
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
