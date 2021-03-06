import { StyleSheet } from 'react-native'
import * as theme from '../../theme'

export default StyleSheet.create({
  SubmitBtnText: {
    color: theme.color.white,
    fontFamily: theme.font.bold,
    fontSize: 16,
  },

  btnDisabled: {
    backgroundColor: theme.color.primary,
  },

  btnEnabled: {
    backgroundColor: theme.color.primaryLight,
  },

  container: {
    padding: 24,
  },

  input: {
    backgroundColor: theme.color.white,
    borderColor: theme.color.whitish,
    borderRadius: 20,
    borderWidth: 1.4,
    height: 56,
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 18,
    textAlignVertical: 'top',
  },

  inputMulti: {
    height: 110,
  },

  label: {
    color: theme.color.font,
    fontFamily: theme.font.semiBold,
    marginBottom: 12,
    marginTop: 16,
  },

  photosInput: {
    alignItems: 'center',
    backgroundColor: theme.color.translucid,
    borderColor: theme.color.primaryLight,
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 1.4,
    height: 56,
    justifyContent: 'center',
    marginBottom: 32,
  },

  selectedPhoto: {
    borderRadius: 20,
    height: 64,
    marginBottom: 32,
    marginRight: 8,
    width: 64,
  },

  selectedPhotosContainer: {
    flexDirection: 'row',
  },

  submitBtn: {
    alignItems: 'center',
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    marginTop: 32,
  },

  wrapper: {
    flex: 1,
  },
})
