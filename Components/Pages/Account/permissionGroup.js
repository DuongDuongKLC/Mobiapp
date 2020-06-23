import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {Height,Width,HeightCalc, WidthCalc,BoderColor,BoderWidth,Colors,Flex,Pos, Font, Margin
} from '../../../Styles/Style';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Col, Picker, Form, Item} from 'native-base';

export default class PermissionGroup extends Component {
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
                 <Header style={[Colors.orange]}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Permission Group </Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                <List>
                    <ListItem itemDivider>
                            <Text style={[Font.fwBold]}> Tài khoản quản trị </Text>
                        </ListItem>                    
                        <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]}>
                            <View style={[Width.w15]}>
                                <Text> Họ và tên  : </Text>
                            </View>
                            <View>
                                <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập họ và tên' />
                            </View>
                        </ListItem>
                        <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                            <View style={[Width.w15]}>
                                <Text> Tài khản : </Text>
                            </View>
                            <View>
                                <TextInput style={[Height.h4, Width.w20]} placeholder='Nhập tài khoản' />
                            </View>
                        </ListItem>
                        <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                            <View style={[Width.w15]}>
                                <Text> Loại tài khoản : </Text>
                            </View>
                            <View>
                                <Form style={[Width.w25, Height.h5]}>
                                    <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Admin cấp 1" value="key0" />
                                        <Picker.Item label="Admin cấp 2" value="key1" />
                                        <Picker.Item label="Đại lý cấp 1" value="key2" />
                                        <Picker.Item label="Đại lý cấp 1" value="key3" />
                                        <Picker.Item label="Khách hàng" value="key4" />
                                    </Picker>
                                    </Item>
                                </Form>
                            </View>
                        </ListItem>
                        <ListItem style={[Flex.f1, Flex.flexDirRow, Height.h5]} >
                            <View style={[Width.w15]}>
                                <Text> Trạng thái : </Text>
                            </View>
                            <View>
                                <Form style={[Width.w25, Height.h5]}>
                                    <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Đang sử dụng" value="key0" />
                                        <Picker.Item label="Đã khoá" value="key1" />
                                    </Picker>
                                    </Item>
                                </Form>
                            </View>
                        </ListItem>
                    </List>
                </Content>
                <View style={[Height.h1, Width.w_full]}></View>
                <View style={[Flex.f1, Flex.flexDirRow, Height.h5,Width.w_full]}>
                    <View style={[Height.h4, Width.w1]}></View>
                    <View style={[Width.w15, Height.h4]}>
                        <Button style={[Flex.f1, Flex.flexDirRow, Flex.jusContentCenter, Colors.orange]}>
                            <Text style={[Font.fwBold]}> Tìm kiếm </Text>
                        </Button>
                    </View> 
                </View>
                <View style={[Height.h1, Width.w_full]}></View>

                <Content style={[]}>
                </Content>
            </ScrollView>
        )
    }
}