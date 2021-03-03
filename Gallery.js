import React from 'react';
import {Button, View, Text} from 'react-native';
import RNWebView from './RNWebView';

const Gallery = () => {
  const url = 'https://www.idfcfirstbank.com/videos.html';
  return (
    <RNWebView
      testID="webView"
      source={{
        uri: url,
      }}
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
      scrollEnabled
      scalesPageToFit
    />
  );
};

export default Gallery;
