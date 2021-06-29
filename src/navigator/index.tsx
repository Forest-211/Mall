import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Category from '../screen/category/Category';
import Comment from '../screen/comment/Comment';
import Conllection from '../screen/conllection/Conllection';
import Detail from '../screen/detail/Detail';
import Rank from '../screen/rank/Rank';
import Recharge from '../screen/recharge/Recharge';
import Me from '../screen/me/Me';
import Bill from '../screen/bill/Bill';
import Cart from '../screen/cart/Cart';
import ButtonTab from './ButtonTab';
import Home from '../screen/home/Home';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';

export type RootStackParamList = {
    ButtonTab: undefined;
    Home: undefined;
    Bill: undefined;
    Cart: undefined;
    Category: undefined;
    Comment: undefined;
    Conllection: undefined;
    Detail: undefined;
    Rank: undefined;
    Recharge: undefined;
    Me: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: '#6070fc',
                        headerTitleStyle: {
                            fontSize: 26,
                            fontWeight: '600',
                        },
                    }}>
                    <Stack.Screen name="ButtonTab" component={ButtonTab} />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerTitle: '首页'}}
                    />
                    <Stack.Screen
                        name="Bill"
                        component={Bill}
                        options={{headerTitle: '账单'}}
                    />
                    <Stack.Screen
                        name="Cart"
                        component={Cart}
                        options={{headerTitle: '购物车'}}
                    />
                    <Stack.Screen
                        name="Category"
                        component={Category}
                        options={{headerTitle: '分类'}}
                    />
                    <Stack.Screen
                        name="Conllection"
                        component={Conllection}
                        options={{headerTitle: '收藏'}}
                    />
                    <Stack.Screen
                        name="Comment"
                        component={Comment}
                        options={{headerTitle: '评论'}}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{headerTitle: '详情'}}
                    />
                    <Stack.Screen
                        name="Rank"
                        component={Rank}
                        options={{headerTitle: '排行'}}
                    />
                    <Stack.Screen
                        name="Recharge"
                        component={Recharge}
                        options={{headerTitle: '充值'}}
                    />
                    <Stack.Screen
                        name="Me"
                        component={Me}
                        options={{headerTitle: '我的'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
