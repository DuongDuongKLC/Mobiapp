import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import {Height,Width,HeightCalc, WidthCalc,BoderColor,BoderWidth,Colors,Flex,Pos, Font, Margin, Padding, TextColor
} from '../../../Styles/Style';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { NativeRouter, Route, Link} from "react-router-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Col, Picker, Form, Item} from 'native-base';

class ControllerLink extends React.PureComponent {
    render() {
        return (
            <View style={[Flex.f1, Flex.flexDirRow, Colors.orange, Height.h5, Width.w_full]}>
                <View style={[Width.w15, Height.h5, Flex.jusContentCenter]}>
                    <Link to="/"><Text style={[Padding.pl1_5, Font.fs1_5, TextColor.white]}> Back Home </Text></Link>
                </View>
                <View style={[Width.w20, Height.h5, Flex.jusContentCenter]}>
                    <Text style={[Font.fs1_5, Font.fwBold, TextColor.white]}> Admin Quản Lý </Text>
                </View>
                <View style={[Flex.jusContentCenter]}>
                    <Link to="/menu"><Text  style={[Font.fs1_5, TextColor.white]}> Menu </Text></Link>
                </View>
            </View>
        );
    }
}
export default ControllerLink;