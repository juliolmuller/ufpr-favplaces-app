import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  Exo2_400Regular as Exo,
  Exo2_700Bold as ExoBold,
  Exo2_600SemiBold as ExoSemiBold,
  Exo2_700Bold_Italic as ExoBoldItalic,
  Exo2_600SemiBold_Italic as ExoSemiBoldItalic,
  Exo2_400Regular_Italic as ExoItalic,
} from '@expo-google-fonts/exo-2'
import Routes from './routes'

function App() {
  const [fontsLoaded] = useFonts({ Exo, ExoBold, ExoSemiBold, ExoBoldItalic, ExoSemiBoldItalic, ExoItalic })

  return (
    <Choose>
      <When condition={fontsLoaded}>
        <Routes />
        <StatusBar style="light" />
      </When>
      <Otherwise>
        <AppLoading />
      </Otherwise>
    </Choose>
  )
}

export default App
