import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {RootStackParamList, RootStackNavigation} from './index';
import Category from '../screen/category/Category';
import Cart from '../screen/cart/Cart';
import Me from '../screen/me/Me';
import Home from '../screen/home/Home';
import {Text} from 'react-native';
import {
    getFocusedRouteNameFromRoute,
    RouteProp,
} from '@react-navigation/native';

export type ButtonTabParamList = {
    Home: undefined;
    Category: undefined;
    Cart: undefined;
    Me: undefined;
};

type Route = RouteProp<RootStackParamList, 'ButtonTab'>;

interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

export default class ButtonTab extends Component<IProps> {
    handleSetHeaderTitle() {
        const {navigation, route} = this.props;
        const routeName = getFocusedRouteNameFromRoute(route) || 'Home';

        navigation.setOptions({
            headerTitle: () => {
                switch (routeName) {
                    case 'Home':
                        return <Text>home</Text>;
                    case 'Category':
                        return <Text>category</Text>;
                    case 'Cart':
                        return <Text>cart</Text>;
                    case 'Me':
                        return <Text>me</Text>;
                    default:
                        return <Text>home</Text>;
                }
            },
        });
    }

    componentDidUpdate() {
        this.handleSetHeaderTitle();
    }
    componentDidMount() {
        this.handleSetHeaderTitle();
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Category" component={Category} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Me" component={Me} />
            </Tab.Navigator>
        );
    }
}
