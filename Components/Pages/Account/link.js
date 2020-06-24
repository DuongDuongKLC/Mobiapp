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
            <View style={[HeightCalc.hcalc8, Width.w_full]}>
                <Content>
                    <List>
                        <ListItem>
                            <Left><Link to="/q-tri"><Text> Quản trị </Text></Link></Left>
                        </ListItem>
                        <ListItem >
                            <Left><Link to="/k-hang"><Text> Khách hàng </Text></Link></Left>
                        </ListItem>
                        <ListItem>
                            <Left><Link to="/group"><Text> Group </Text></Link></Left>
                        </ListItem>
                        <ListItem>
                            <Left><Link to="/q-group"><Text> Quyền group </Text></Link></Left>
                        </ListItem>
                        <ListItem>
                            <Left><Link to="/"><Text> Quay về trang chủ </Text></Link></Left>
                        </ListItem>
                    </List>
                </Content>
            </View>
        );
    }
}
export default ControllerLink;