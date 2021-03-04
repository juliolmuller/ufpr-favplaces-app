import project from './package.json'

export default {
  expo: {
    name: 'FavPlaces',
    slug: project.name,
    version: project.version,
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      backgroundColor: '#15c3d6',
      image: './src/assets/splash.png',
      resizeMode: 'cover',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    android: {
      adaptiveIcon: {
        backgroundColor: '#15c3d6',
        foregroundImage: './src/assets/icon.png',
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
