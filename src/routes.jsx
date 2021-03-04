import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TheHeader from './components/common/TheHeader'
import PlaceDetails from './components/PlaceDetails'
import PlaceForm from './components/PlaceForm'
import PlacesMap from './components/PlacesMap'

const { Navigator, Screen } = createStackNavigator()

const screenOptions = {
  common: {
    cardStyle: { backgroundColor: '#f2f3f5' },
    headerShown: false,
  },
  PlaceDetails: {
    // eslint-disable-next-line react/display-name
    header: () => <TheHeader title="Orfanato" cancelBtn />,
    headerShown: true,
  },
  PlaceForm: {
    // eslint-disable-next-line react/display-name
    header: () => <TheHeader title="Dados do orfanato" />,
    headerShown: true,
  },
}

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions.common}>
        <Screen
          name="PlacesMap"
          component={PlacesMap}
        />
        <Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={screenOptions.PlaceDetails}
        />
        <Screen
          name="PlaceForm"
          component={PlaceForm}
          options={screenOptions.PlaceForm}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
