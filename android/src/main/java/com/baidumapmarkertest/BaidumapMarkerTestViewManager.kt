package com.baidumapmarkertest

import android.graphics.Color
import android.view.View
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.baidu.mapapi.*
import com.baidu.mapapi.map.*
import com.baidu.mapapi.model.LatLng
import com.baidumapmarkertest.R

class BaidumapMarkerTestViewManager : SimpleViewManager<TextureMapView>() {
  override fun getName() = "BaidumapMarkerTestView"

  override fun createViewInstance(reactContext: ThemedReactContext): TextureMapView {
    if (!SDKInitializer.isInitialized()) {
      SDKInitializer.setAgreePrivacy(reactContext.applicationContext, true)
      SDKInitializer.setApiKey("WRXsmQcQERximJo46wUsxfmCT9Fv7IhW")
      SDKInitializer.initialize(reactContext.applicationContext)
    }
    
    val mapView = TextureMapView(reactContext)

    // 停用 overlay2.0 绘制地图覆盖物，才不会出现 Marker 无法拖动的问题
    // OverlayUtil.setOverlayUpgrade(false)

    val option: OverlayOptions = MarkerOptions()
      .position(LatLng(39.963175, 116.400244))
      .icon(BitmapDescriptorFactory.fromResource(R.drawable.icon_gcoding))
      .clickable(true)
      .draggable(true)

    mapView.map.clear()
    mapView.map.addOverlay(option)


    return mapView
  }
}
