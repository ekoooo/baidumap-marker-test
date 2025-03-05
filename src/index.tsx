import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-baidumap-marker-test' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type BaidumapMarkerTestProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'BaidumapMarkerTestView';

export const BaidumapMarkerTestView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<BaidumapMarkerTestProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
