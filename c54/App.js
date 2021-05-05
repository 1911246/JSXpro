import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class RedButton extends Component {
  displayAlert=()=>{
    alert("PlaySound");
  }
  render(){
    return(
      <Button 
      color={this.props.color} 
      title={this.props.title}
      onPress={this.displayAlert}/>
    )
  }
}




export default class App extends Component {
  render() {
    return (
      <View 
      style={{marginTop: 50}}>
        <RedButton color="pink" title = 'Sound1' />
        <RedButton color='orange' title ='Sound2'/>
        <RedButton color='yellow' title ='Sound3'/>
        <RedButton color= 'lightgreen' title ='Sound4'/>
        <RedButton color='lightblue' title ='Sound5'/>
      </View>
    );
  }

}



