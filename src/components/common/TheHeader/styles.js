import { StyleSheet } from 'react-native'
import * as theme from '../../../theme'

export default StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: theme.color.white,
    borderBottomWidth: 1,
    borderColor: theme.color.whitish,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: theme.color.font,
    fontFamily: theme.font.semiBold,
    fontSize: 16,
  },
})
