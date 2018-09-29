import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const availableZipItems = [
    {place: 'Hatyai', code: '90110'},
    {place: 'Trang', code: '92000'},
    {place: 'Chiangmai', code: '50000'},
    {place: 'KhonKaen', code: '40000'},
    {place: 'Chonburi', code: '20000'},
]

const ZipItem = ({place, code , navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather' , {zipCode : code})}>
        <View style = {styles.listContainer}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle : (<Text>Choose a zip code</Text>)
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View>
                <FlatList
                    data = {availableZipItems}
                    keyExtractor = {_keyExtractor}
                    renderItem = {({item}) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row', 
    },



});


