# react-native-alium

A React Native wrapper for Alium Android SDK

## Installation

```sh
npm install react-native-alium
```

## Usage

### Configure the SDK with Configure()

import configure from react-native-alium.

```js
import { configure } from 'react-native-alium';
```

Call configure method.

```js
configure('your_project_url');
```

This method should be the first method called when initializing the Alium SDK. It sets the project key or URL and must be invoked as soon as possible in your application's lifecycle. You can call it at the entry point(index.js) of the project.

### Trigger Surveys

Use AliumSdk.showSurvey() with the screen name to display surveys.

Import showSurvey()

```js
import { loadAliumSurvey } from 'react-native-alium';
```

```dart
 loadAliumSurvey("your_screen_name", {});
```

### Passing custom parameters to survey

```js
loadAliumSurvey('your_screen_name', { key: 'value' });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
"# react-native-alium"
