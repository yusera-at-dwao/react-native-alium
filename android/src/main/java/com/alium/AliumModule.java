package com.alium;

import android.view.ContextThemeWrapper;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;


import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.dwao.alium.survey.Alium;

@ReactModule(name = AliumModule.NAME)
public class AliumModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Alium";
  private static String URL = "";
  private static ReactApplicationContext reactApplicationContext;

  public AliumModule(ReactApplicationContext reactContext) {
    super(reactContext);
    reactApplicationContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void configure(String url) {
    Alium.configure(url);
  }

  @ReactMethod
  public void showSurvey(String screenName) {
    Alium.loadAliumSurvey(reactApplicationContext.getCurrentActivity(), screenName);
  }
}
