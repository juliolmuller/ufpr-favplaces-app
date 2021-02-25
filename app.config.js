import project from './package.json'

export default {
  expo: {
    name: 'FavPlaces',
    slug: project.name,
    version: project.version,
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
  },
}
