import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, SectionList, Platform} from 'react-native';
import {Height,Width,HeightCalc, WidthCalc,BoderColor,BoderWidth,Colors,Flex,Pos, Font, Margin, Zindex, TextColor
} from '../../../Styles/Style';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Form, Item, Picker} from 'native-base';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class Account_Management extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
    }
    onValueChange2(value: string) {
    this.setState({
        selected2: value
    });
    }
    render(){
        return(
            <ScrollView>
            <Content>
                <List>
                    <ListItem itemDivider style={[Pos.pos_r, Zindex.z1]}>
                        <Text style={[Font.fwBold]}> Thông tin công ty </Text>
                    </ListItem>                    
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]}>
                        <View style={[Width.w15]}>
                            <Text> Tên công ty : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập tên công ty' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Địa chỉ : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập địa chỉ' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Mã số thuế : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập mã số thuế' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Số điện thoại : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập số điện thoại' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Fax : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập số fax' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Thông tin hóa đơn : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập thông tin hóa đơn' />
                        </View>
                    </ListItem>
                    
                    <ListItem itemDivider>
                        <Text style={[Font.fwBold]}> Thông tin tài khoản </Text>
                    </ListItem>  
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]}>
                        <View style={[Width.w15]}>
                            <Text> Họ và tên : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} value='Họ và tên' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Tên đăng nhập : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} value='Tên đăng nhập' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Mật khẩu : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập mật khẩu mới' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Nhập lại mật khẩu : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập lại mật khẩu mới' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Email : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập email' />
                        </View>
                    </ListItem>
                    <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                        <View style={[Width.w15]}>
                            <Text> Số điện thoại : </Text>
                        </View>
                        <View>
                            <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập sô ́điện thoại' />
                        </View>
                    </ListItem>
                </List>
            </Content>
            <View style={[Height.h1, Width.w_full]}></View>
            <View style={[Height.h4, Width.w_full, Flex.f1, Flex.flexDirRow]}>
                <View style={[Height.h4, Width.w1]}></View>
                <View style={[Width.w15, Height.h4]}>
                    <Button style={[Flex.f1, Flex.flexDirRow, Flex.jusContentCenter, Colors.orange]}>
                        <Text style={[Font.fwBold]}> Đồng ý </Text>
                    </Button>
                </View> 
            </View>
            <View style={[Height.h1, Width.w_full]}></View>
            </ScrollView>
        )
    }
}
