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
    alignItems: 'center',
    backgroundColor: theme.color.primaryDark,
    borderRadius: 20,
    bottom: 32,
    elevation: 3,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    left: 24,
    position: 'absolute',
    right: 24,
  },

  footerText: {
    color: theme.color.white,
    fontFamily: theme.color.bold,
    fontSize: 20,
    marginRight: 16,
  },

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
})
