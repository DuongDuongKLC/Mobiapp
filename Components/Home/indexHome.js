import React, {Component} from 'react';
import Account_Management from '../Pages/Account/accountManagement';
import Customer from '../Pages/Account/customer';
import Administration from '../Pages/Account/administration';
import Group from '../Pages/Account/group';
import PermissionGroup from '../Pages/Account/permissionGroup';
import ControllerLink from '../Pages/Account/controllerLink';
import Plink from '../Pages/Account/link'
import { NativeRouter, Route, Link} from "react-router-native";
import {View, Text, ScrollView} from 'react-native';

const Management = () => <Account_Management />;
const Admin = () => <Administration />;
const Cus = () => <Customer />;
const Gp = () => <Group />;
const PermissionGp = () => <PermissionGroup />;
const Plk =() => <Plink />
export const IndexHome = () => {

    return(
        <ScrollView>
            <NativeRouter>
                <ControllerLink />
                <Route exact path="/" component={Management} />
                <Route path="/menu" component={Plk}></Route>
                <Route path="/q-tri" component={Admin} />
                <Route path="/k-hang" component={Cus} />
                <Route path="/group" component={Gp} />
                <Route path="/q-group" component={PermissionGp}/>
            </NativeRouter>
        </ScrollView>
    )
}