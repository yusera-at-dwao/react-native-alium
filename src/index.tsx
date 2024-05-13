import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-alium' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Alium = NativeModules.Alium
  ? NativeModules.Alium
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function configure(url: String): void {
  return Alium.configure(url);
}
interface Variables {
  [key: string]: any;
}
export function loadAliumSurvey(
  screen: String,
  customerParameters: Variables
): void {
  Alium.showSurvey(screen, customerParameters ? customerParameters : {});
}
