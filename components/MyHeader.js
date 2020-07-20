import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import Notification from '../screens/MyNotification'
import { render } from 'react-dom';
export default class MyHeader extends Component {
  constructor(props){
    super(props)
    this.state = {value:""}
  }
  getNoOfUnredNotificaton(){
    debug.collection('all_notification').where('notification_status','==','unread')
    .onSnapshot((snapShot) => {var unredNotificaton = snapShot.docs.map((doc)=>doc.data())
    this.setState({value:unredNotificaton.length})
    })
  }
  BellIconWithBage =(props)=>{
    return(
      <View>
        <Icon name = 'bell' type ='font-awesome' color = '#696969' size = {25}
        onPress = {()=>props.navigation.navigate('Notification')}/>

        <Badge 
        value = {this.state.value} containerStyle = {{position:'absolute',top:-4, right:-4}}
        ></Badge>
      </View>
    )
  }
  render(){
    return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent = {<BellIconWithBage{...props}/>}
      backgroundColor = "#eaf8fe"
    />
  );}
};


