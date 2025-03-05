# 百度地图 Android SDK V7.6.1 在 React Native 中无法拖动问题复现

## node -v
`Now using node v22.0.0 (npm v10.5.1)`

## 运行步骤
- 调整 JDK 版本, Android Gradle plugin requires Java 17 to run, changing `org.gradle.java.home` in `example/android/gradle.properties`
- `cd cd example`
- `yarn`
- `yarn start`
- `yarn android`

## Android Marker 问题描述
- SDK V7.6.1 版本 Marker 可正常拖动，升级至 V7.6.2 后，Marker 将无法拖动（停用 overlay2.0 可拖动）
- 代码位置 `android/src/main/java/com/baidumapmarkertest/BaidumapMarkerTestViewManager.kt`


---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
