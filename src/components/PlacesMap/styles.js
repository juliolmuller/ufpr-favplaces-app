import { Dimensions, StyleSheet } from 'react-native'
import * as theme from '../../theme'

export default StyleSheet.create({
  calloutContainer: {
    backgroundColor: theme.color.background,
    borderRadius: 16,
    elevation: 10,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
  },

  calloutText: {
    color: theme.color.font,
    fontFamily: theme.font.bold,
    fontSize: 14,
  },

  container: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: theme.color.primaryDark,
    bottom: 0,
    elevation: 10,
    height: 96,
    left: 0,
    position: 'absolute',
    right: 0,
  },

  footerText: {
    color: theme.color.white,
    fontFamily: theme.color.bold,
    fontSize: 18,
    marginVertical: 8,
    textAlign: 'center',
  },

  instructions: {
    backgroundColor: theme.color.translucid,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },

  instructionsText: {
    color: theme.color.font,
    fontFamily: theme.font.italic,
    fontSize: 14,
    marginHorizontal: 32,
    marginVertical: 8,
    textAlign: 'center',
  },

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
})
