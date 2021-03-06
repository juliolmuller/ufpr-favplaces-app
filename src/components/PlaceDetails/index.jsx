import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, Linking, ScrollView, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import mapMarker from '../../assets/map-marker.png'
import styles from './styles'

function PlaceDetails() {
  const place = useRoute().params

  const handleOpenGoogleMaps = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`)
  }

  return (
    <ScrollView style={styles.wrapper}>
      <If condition={place.photos.length}>
        <View style={styles.imagesContainer}>
          <ScrollView horizontal pagingEnabled>
            <For each="photo" index="index" of={place.photos}>
              <Image
                key={index}
                style={styles.image}
                source={{ uri: photo }}
              />
            </For>
          </ScrollView>
        </View>
      </If>

      <View style={styles.detailsContainer}>
        <If condition={place.about}>
          <Text style={styles.title}>{place.name}</Text>
          <Text style={styles.description}>{place.about}</Text>
        </If>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            initialRegion={{
              latitude: place.latitude,
              longitude: place.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              icon={mapMarker}
              coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            />
          </MapView>

          <TouchableOpacity style={styles.routesContainer} onPress={handleOpenGoogleMaps}>
            <Text style={styles.routesText}>
              Ver rotas no Google Maps
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails
