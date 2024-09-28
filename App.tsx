import React from "react";
import { View, ScrollView } from "react-native"
import SampleComponent from "./SampleComponent";
import StylingReactNativeComponent from "./StylingReactNativeComponent";
import Profile from "./profile";
import Edlink from "./profileWA";

const App = () => {
  return(
    <View>

      <ScrollView>
        <SampleComponent/>
        <StylingReactNativeComponent/>
        <Profile/>
        <Edlink/>
      </ScrollView>
    </View>
  )
}

export default App;