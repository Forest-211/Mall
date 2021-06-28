import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '../../navigator/index';

interface IProps {
    navigation: RootStackNavigation;
}
export default class Home extends Component<IProps> {
    render() {
        return (
            <View>
                <Text>text</Text>
                <Button
                    title="click me jump details"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        );
    }
}
