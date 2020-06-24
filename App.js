import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {Height,Width,HeightCalc, WidthCalc,BoderColor,BoderWidth,Colors,Flex,Pos
} from './Styles/Style';
import {IndexHome} from './Components/Home/indexHome';
import Account_Management from './Components/Pages/Account/accountManagement'

const App: () => React$Node = () => {
  return (
      <ScrollView>
          <IndexHome />
      </ScrollView>
  );
};
export default App;

{/* <View style={[Height.h7, Width.w_full, Flex.f1, Flex.flexDirRow, Colors.white]}>
<View style={[Height.h7, Width.w30]}>
  <Image source={{uri: "https://i.imgur.com/S4UMTYH.png"}} resizeMode='contain' 
  style={[Height.h6, Width.w15, Pos.pos_a, Pos.r1, Pos.t_4]}/>
</View>
<View style={[Height.h7, WidthCalc.wcalc30]}>
  <Image source={{uri: "https://i.imgur.com/LArqV0E.png"}} resizeMode='contain'
    style={[Height.h3, Width.w10, Pos.t2]}
  />
</View>
</View>
<View style={[HeightCalc.hcalc15, Width.w_full, Colors.violet]}> */}