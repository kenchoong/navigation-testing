# navigation-testing

![screen shot](https://raw.githubusercontent.com/kenchoong/navigation-testing/main/screenshot.jpeg)

*Problem happen in /screen/login.tsx*


# LOGS 

```
Running application on iPhone.
ERROR
09:16
Error: Couldn't find a navigation object. Is your component inside a screen in a navigator?

This error is located at:
    in Login (at SceneView.tsx:126)
    in StaticContainer
    in StaticContainer (at SceneView.tsx:119)
    in EnsureSingleNavigator (at SceneView.tsx:118)
    in SceneView (at useDescriptors.tsx:209)
    in RCTView (at View.js:34)
    in View (at CardContainer.tsx:280)
    in RCTView (at View.js:34)
    in View (at CardContainer.tsx:278)
    in RCTView (at View.js:34)
    in View (at CardSheet.tsx:33)
    in ForwardRef(CardSheet) (at Card.tsx:556)
    in RCTView (at View.js:34)
    in View (at createAnimatedComponent.js:165)
    in AnimatedComponent (at createAnimatedComponent.js:215)
    in ForwardRef(AnimatedComponentWrapper) (at Card.tsx:535)
    in PanGestureHandler (at GestureHandlerNative.tsx:14)
    in PanGestureHandler (at Card.tsx:529)
    in RCTView (at View.js:34)
    in View (at createAnimatedComponent.js:165)
    in AnimatedComponent (at createAnimatedComponent.js:215)
    in ForwardRef(AnimatedComponentWrapper) (at Card.tsx:525)
    in RCTView (at View.js:34)
    in View (at Card.tsx:519)
    in Card (at CardContainer.tsx:218)
    in CardContainer (at CardStack.tsx:649)
    in RCTView (at View.js:34)
    in View (at Screens.tsx:41)
    in MaybeScreen (at CardStack.tsx:642)
    in RCTView (at View.js:34)
    in View (at Screens.tsx:23)
    in MaybeScreenContainer (at CardStack.tsx:561)
    in RCTView (at View.js:34)
    in View (at Background.tsx:13)
    in Background (at CardStack.tsx:559)
    in CardStack (at StackView.tsx:437)
    in RNCSafeAreaProvider (at SafeAreaContext.tsx:76)
    in SafeAreaProvider (at SafeAreaProviderCompat.tsx:46)
    in SafeAreaProviderCompat (at StackView.tsx:430)
    in RCTView (at View.js:34)
    in View (at StackView.tsx:429)
    in StackView (at createStackNavigator.tsx:118)
    in Unknown (at createStackNavigator.tsx:117)
    in StackNavigator (at App.tsx:16)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:429)
    in ForwardRef(BaseNavigationContainer) (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in ForwardRef(NavigationContainerInner) (at App.tsx:15)
    in App (created by ExpoRoot)
    in ExpoRoot (at renderApplication.js:45)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:106)
    in DevAppContainer (at AppContainer.js:121)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:132)
    in AppContainer (at renderApplication.js:39)

Stack trace:
  node_modules\react-native\Libraries\LogBox\LogBox.js:148:8 in registerError
  node_modules\react-native\Libraries\LogBox\LogBox.js:59:8 in errorImpl
  node_modules\react-native\Libraries\LogBox\LogBox.js:33:4 in console.error
  node_modules\expo\build\environment\react-native-logs.fx.js:27:4 in error
  node_modules\react-native\Libraries\Core\ExceptionsManager.js:104:6 in reportException
  node_modules\react-native\Libraries\Core\ExceptionsManager.js:171:19 in handleException
  node_modules\react-native\Libraries\Core\ReactFiberErrorDialog.js:43:2 in showErrorDialog
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:15257:32 in logCapturedError
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:15361:20 in logError
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:16597:12 in update.callback
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:7106:2 in callCallback
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:7127:20 in commitUpdateQueue
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:15801:25 in commitLifeCycles
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:18744:22 in commitLayoutEffects
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:265:4 in invokeGuardedCallbackImpl
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:476:2 in invokeGuardedCallback
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:18483:29 in commitRootImpl
  [native code]:null in commitRootImpl
  node_modules\scheduler\cjs\scheduler.development.js:653:23 in unstable_runWithPriority
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:18317:17 in commitRoot
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:17697:12 in performSyncWorkOnRoot
  [native code]:null in performSyncWorkOnRoot
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:5321:31 in runWithPriority$argument_1
  node_modules\scheduler\cjs\scheduler.development.js:653:23 in unstable_runWithPriority
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:5316:21 in flushSyncCallbackQueueImpl
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:5304:28 in flushSyncCallbackQueue
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:17125:30 in scheduleUpdateOnFiber
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:20527:14 in updateContainer
  node_modules\react-native\Libraries\Renderer\implementations\ReactNativeRenderer-dev.js:21068:17 in render
  node_modules\react-native\Libraries\ReactNative\renderApplication.js:54:4 in renderApplication
  node_modules\react-native\Libraries\ReactNative\AppRegistry.js:117:25 in runnables.appKey.run
  node_modules\react-native\Libraries\ReactNative\AppRegistry.js:213:4 in runApplication
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:416:4 in __callFunction
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:109:6 in __guard$argument_0
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:108:4 in callFunctionReturnFlushedQueue
  [native code]:null in callFunctionReturnFlushedQueue
  ...
ERROR
09:16
Error: Couldn't find a navigation object. Is your component inside a screen in a navigator?

This error is located at:
    in Login (at SceneView.tsx:126)
    in StaticContainer
    in StaticContainer (at SceneView.tsx:119)
    in EnsureSingleNavigator (at SceneView.tsx:118)
    in SceneView (at useDescriptors.tsx:209)
    in RCTView (at View.js:34)
    in View (at CardContainer.tsx:280)
    in RCTView (at View.js:34)
    in View (at CardContainer.tsx:278)
    in RCTView (at View.js:34)
    in View (at CardSheet.tsx:33)
    in ForwardRef(CardSheet) (at Card.tsx:556)
    in RCTView (at View.js:34)
    in View (at createAnimatedComponent.js:165)
    in AnimatedComponent (at createAnimatedComponent.js:215)
    in ForwardRef(AnimatedComponentWrapper) (at Card.tsx:535)
    in PanGestureHandler (at GestureHandlerNative.tsx:14)
    in PanGestureHandler (at Card.tsx:529)
    in RCTView (at View.js:34)
    in View (at createAnimatedComponent.js:165)
    in AnimatedComponent (at createAnimatedComponent.js:215)
    in ForwardRef(AnimatedComponentWrapper) (at Card.tsx:525)
    in RCTView (at View.js:34)
    in View (at Card.tsx:519)
    in Card (at CardContainer.tsx:218)
    in CardContainer (at CardStack.tsx:649)
    in RCTView (at View.js:34)
    in View (at Screens.tsx:41)
    in MaybeScreen (at CardStack.tsx:642)
    in RCTView (at View.js:34)
    in View (at Screens.tsx:23)
    in MaybeScreenContainer (at CardStack.tsx:561)
    in RCTView (at View.js:34)
    in View (at Background.tsx:13)
    in Background (at CardStack.tsx:559)
    in CardStack (at StackView.tsx:437)
    in RNCSafeAreaProvider (at SafeAreaContext.tsx:76)
    in SafeAreaProvider (at SafeAreaProviderCompat.tsx:46)
    in SafeAreaProviderCompat (at StackView.tsx:430)
    in RCTView (at View.js:34)
    in View (at StackView.tsx:429)
    in StackView (at createStackNavigator.tsx:118)
    in Unknown (at createStackNavigator.tsx:117)
    in StackNavigator (at App.tsx:16)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:429)
    in ForwardRef(BaseNavigationContainer) (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in ForwardRef(NavigationContainerInner) (at App.tsx:15)
    in App (created by ExpoRoot)
    in ExpoRoot (at renderApplication.js:45)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:106)
    in DevAppContainer (at AppContainer.js:121)
    in RCTView (at View.js:34)
    in View (at AppContainer.js:132)
    in AppContainer (at renderApplication.js:39)

Stack trace:
  node_modules\react-native\Libraries\LogBox\LogBox.js:148:8 in registerError
  node_modules\react-native\Libraries\LogBox\LogBox.js:59:8 in errorImpl
  node_modules\react-native\Libraries\LogBox\LogBox.js:33:4 in console.error
  node_modules\expo\build\environment\react-native-logs.fx.js:27:4 in error
  node_modules\react-native\Libraries\Core\ExceptionsManager.js:104:6 in reportException
  node_modules\react-native\Libraries\Core\ExceptionsManager.js:171:19 in handleException
  node_modules\react-native\Libraries\Core\setUpErrorHandling.js:24:6 in handleError
  node_modules\expo-error-recovery\build\ErrorRecovery.fx.js:12:21 in ErrorUtils.setGlobalHandler$argument_0
  node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
  node_modules\regenerator-runtime\runtime.js:294:29 in invoke
  node_modules\regenerator-runtime\runtime.js:63:36 in tryCatch
  node_modules\regenerator-runtime\runtime.js:155:27 in invoke
  node_modules\regenerator-runtime\runtime.js:165:18 in PromiseImpl.resolve.then$argument_0
  node_modules\react-native\node_modules\promise\setimmediate\core.js:37:13 in tryCallOne
  node_modules\react-native\node_modules\promise\setimmediate\core.js:123:24 in setImmediate$argument_0
  node_modules\react-native\Libraries\Core\Timers\JSTimers.js:130:14 in _callTimer
  node_modules\react-native\Libraries\Core\Timers\JSTimers.js:181:14 in _callImmediatesPass
  node_modules\react-native\Libraries\Core\Timers\JSTimers.js:441:30 in callImmediates
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:387:6 in __callImmediates
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:135:6 in __guard$argument_0
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
  node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:134:4 in flushedQueue
  [native code]:null in flushedQueue
  [native code]:null in invokeCallbackAndReturnFlushedQueue
```
