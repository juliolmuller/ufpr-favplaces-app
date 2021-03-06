import { Dimensions, StyleSheet } from 'react-native'
import * as theme from '../../theme'

export default StyleSheet.create({
  description: {
    color: theme.color.font,
    fontFamily: theme.font.semiBold,
    lineHeight: 24,
    marginTop: 16,
  },

  detailsContainer: {
    padding: 24,
    paddingBottom: 54,
  },

  image: {
    height: 240,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
  },

  imagesContainer: {
    height: 240,
  },

  mapContainer: {
    backgroundColor: theme.color.background,
    borderColor: theme.color.border,
    borderRadius: 20,
    borderWidth: 1.2,
    elevation: 10,
    marginTop: 40,
    overflow: 'hidden',
  },

  mapStyle: {
    height: 150,
    width: '100%',
  },

  routesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  routesText: {
    color: theme.color.primaryDark,
    fontFamily: theme.font.bold,
  },

  title: {
    color: theme.color.font,
    fontFamily: theme.font.bold,
    fontSize: 28,
  },

  wrapper: {
    flex: 1,
  },
})
