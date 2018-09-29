import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component{
    render(){
        return (
            <View >
                <Text style={styles.mainStyle}>{this.props.main}</Text>
                <Text style={styles.descriptionStyle}>{this.props.description}</Text>
                <Text style={styles.tempStyle}>{this.props.temp}  ํC</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainStyle : {
        paddingTop : 20,
        color : '#fff',
        fontSize : 40,
    },
    descriptionStyle : {
        paddingTop : 20,
        color : '#fff',
        fontSize : 15,
    },
    tempStyle : {
        paddingTop : 20,
        color : '#fff',
        fontSize : 30,
    }

  });
  