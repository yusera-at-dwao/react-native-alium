# react-native-alium

A React Native wrapper for Alium Android SDK

## Installation

```sh
npm install react-native-alium
```

## Usage

Add the following maven url to your app's build.gradle file.

```groovy
    allprojects{
      repositories{
            google()
            jcenter()
            maven{url 'https://jitpack.io'}
        }
    }
```

```js
import { configure, showSurvey } from 'react-native-alium';

// ...

configure(url); //call at the entry point of your app
loadAliumSurvey(current_screen, { key: value });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
"# react-native-alium"
