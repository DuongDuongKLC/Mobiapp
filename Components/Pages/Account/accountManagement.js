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
            <View style={[Colors.orange , Flex.f1, Flex.flexDirRow, Height.h5, Flex.jusContentEnd]}>
                <View style={[Flex.f1, Flex.flexDirRow, Flex.jusContentCenter, Flex.aliSelfCenter, Width.w5]}>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </View>
                <View style={[Width.w20, Flex.f1, Flex.flexDirRow, Flex.jusContentCenter, Flex.aliSelfCenter]}>
                    <Title> Account Management </Title>
                </View>
                <View style={[Width.w15]}>
                    <View style={[Height.h30, Width.w20, Pos.pos_a, Pos.r1, Zindex.z10]}>
                        <MenuProvider>
                            <Menu>
                            <MenuTrigger style={[Height.h5]} >
                                <View style={[Height.h5, Flex.f1, Flex.flexDirRow, Font.fwBold]}>
                                    <Text style={[Pos.pos_a, Pos.r4, Pos.t1]}> Menu </Text>
                                    <Icon style={[Pos.pos_a, Pos.r1, Pos.t1]} name='menu' />
                                </View>
                            </MenuTrigger>
                            <MenuOptions style={[Pos.pos_a, Pos.t9 , Colors.black, Pos.r1, Height.h20, Width.w20]} >
                                <MenuOption value={"Login"} style={[Height.h5]}>
                                <Text style={[TextColor.white, Pos.pos_a, Pos.r2, Pos.t2]}> Login</Text>
                                </MenuOption>
                                <MenuOption value={"Register"} style={[Height.h5]}>
                                <Text style={[TextColor.white, Pos.pos_a, Pos.r2, Pos.t2]} > Register</Text>
                                </MenuOption>
                                <MenuOption value={"Download"} style={[Height.h5]}>
                                <Text style={[TextColor.white, Pos.pos_a, Pos.r2, Pos.t2]}> Download</Text>
                                </MenuOption>
                                <MenuOption value={"Logout"} style={[Height.h5]}>
                                <Text style={[TextColor.white, Pos.pos_a, Pos.r2, Pos.t2]}> Logout</Text>
                                </MenuOption>
                            </MenuOptions>

                            </Menu>
                        </MenuProvider>
                    </View>
                </View>
            </View>
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
