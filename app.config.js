import dotenv from 'dotenv'
import project from './package.json'

const config = dotenv.config()

if (config.error) {
  throw config.error
}

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
    extra: {
      ...process.env,
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
    androidStatusBar: {
      backgroundColor: '#15c3d6',
      barStyle: 'light-content',
    },
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
  },
}
