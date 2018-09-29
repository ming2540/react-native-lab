import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Forecast from './Forecast'


export default class Weather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      forecast : {
        main: 'main',
        description : 'description',
        temp : 0
      }
    }
  }

  componentDidUpdate = (prevprops) => {
    if(prevprops.zipCode !== this.props.zipCode){
      this.fetchData()
    }
  }


  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        forecast: {
          main: json.weather[0].main,
          description: json.weather[0].description,
          temp: json.main.temp
        }
      })
    })
    .catch((error) => {
      console.warn(error);
    });
  } 

  componentDidMount = () => this.fetchData()
  
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
          <View style={styles.textContainer}>
            <Text style={styles.zipCode}>Zip code is {this.props.zipCode}</Text>
            <Forecast {...this.state.forecast}/>
          </View>
          <View style={styles.blankContainer}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: { paddingTop : 25 },
  backdrop: { width: '100%', height: '100%' },
  textContainer : {
    flex : 2,
    backgroundColor: '#000',
    opacity: 0.3,
    alignItems: 'center',
  },
  zipCode: { 
    paddingTop : 20,
    color: '#fff',
    fontSize : 20,
  },
  blankContainer : {
    flex : 3
  },
});
