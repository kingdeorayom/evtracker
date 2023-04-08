import { MD3LightTheme, configureFonts } from 'react-native-paper';
import fonts from './fonts';

const theme = {
    ...MD3LightTheme,
    "fonts": configureFonts({ config: fonts }),

    "colors": {
        "primary": "rgb(192, 0, 1)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(255, 218, 212)",
        "onPrimaryContainer": "rgb(65, 0, 0)",
        "secondary": "rgb(119, 86, 81)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(255, 218, 212)",
        "onSecondaryContainer": "rgb(44, 21, 18)",
        "tertiary": "rgb(112, 92, 46)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(251, 223, 166)",
        "onTertiaryContainer": "rgb(37, 26, 0)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(255, 255, 255)",
        "onBackground": "rgb(32, 26, 25)",
        "surface": "rgb(255, 255, 255)",
        "onSurface": "rgb(32, 26, 25)",
        // "surfaceVariant": "rgb(245, 245, 245)",
        "surfaceVariant": "rgb(255, 218, 212)",
        "onSurfaceVariant": "rgb(83, 67, 65)",
        "outline": "rgb(133, 115, 112)",
        "outlineVariant": "rgb(216, 194, 190)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(54, 47, 46)",
        "inverseOnSurface": "rgb(251, 238, 236)",
        "inversePrimary": "rgb(255, 180, 168)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(252, 238, 242)",
            // "level2": "rgb(250, 231, 235)",
            "level2": "rgb(255, 255, 255)",
            "level3": "rgb(245, 245, 245)",
            "level4": "rgb(247, 221, 225)",
            "level5": "rgb(246, 216, 219)"
        },
        "surfaceDisabled": "rgba(32, 26, 25, 0.12)",
        "onSurfaceDisabled": "rgba(32, 26, 25, 0.38)",
        "backdrop": "rgba(59, 45, 43, 0.4)"
    }
}

export default theme