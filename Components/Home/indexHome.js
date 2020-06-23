import React, {Component} from 'react';
import Account_Management from '../Pages/Account/accountManagement';
import Customer from '../Pages/Account/customer';
import Administration from '../Pages/Account/administration';
import Group from '../Pages/Account/group';
import PermissionGroup from '../Pages/Account/permissionGroup';
import { NativeRouter, Route, Link } from "react-router-native";
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

export default class IndexHome extends Component {
    render(){
        const Home = () => <Text>Home</Text>;
        const About = () => <Text>About</Text>;

        return(
            <Account_Management />
            // <NativeRouter>
            //     <Link to="/" underlayColor="#f0f4f7">
            //         <Text>Home</Text>
            //     </Link>
            //     <Link to="/about"underlayColor="#f0f4f7">
            //         <Text>About</Text>
            //     </Link>
            //     <Route exact path="/" component={Home} />
            //     <Route path="/about" component={About} />
            // </NativeRouter>
        )
    }
}
