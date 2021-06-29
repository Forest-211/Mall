import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '../../navigator/index';
import Icon from 'react-native-vector-icons/FontAwesome';
interface IProps {
    navigation: RootStackNavigation;
}
export default class Home extends Component<IProps> {
    render() {
        return (
            <View>
                <Text>text</Text>
                <Icon style={{fontSize: 50}} name="apple" />
                <Button
                    title="click me jump details"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        );
    }
}
