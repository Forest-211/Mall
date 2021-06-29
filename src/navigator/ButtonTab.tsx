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
import Icon from 'react-native-vector-icons/FontAwesome';

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
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

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
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#6070fc', // 修改tabbar激活颜色
                    labelStyle: {
                        fontSize: 12,
                        fontWeight: '300',
                    },
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, size}) => {
                        let iconName = '';
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Category':
                                iconName = 'list';
                                break;
                            case 'Cart':
                                iconName = 'shopping-cart';
                                break;
                            case 'Me':
                                iconName = 'user-o';
                                break;

                            default:
                                break;
                        }
                        return (
                            <Icon
                                name={iconName}
                                color={focused ? '#6070fc' : '#ccc'}
                                size={size}
                            />
                        );
                    },
                })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Category" component={Category} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Me" component={Me} />
            </Tab.Navigator>
        );
    }
}
