import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { configure } from 'react-native-alium';
configure('https://assets.alium.co.in/cmmn/cstjn/cstjn_1038.json');
console.log('useeffect');
AppRegistry.registerComponent(appName, () => App);
