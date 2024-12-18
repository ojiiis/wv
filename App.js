import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {NavBar} from './res/navbar';
import {useState} from 'react';
function Page1(){
    return(
        <>
        <Text>Page 1</Text>
        </>
        );
}

function Page2(){
    return(
        <>
        <Text>Page 2</Text>
        </>
        );
}
export default function App() {

const [page,setPage] = useState("");
  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="pink"/>
      <Text>Open up App.js to start working on your app!
      {page}
      </Text>
      
      <NavBar
      action={(x)=>{
       setPage(x.view)
      }}
      tabs={
          [
          {
              name:'Sam',
              view:<Page1/>,
              img:require('./assets/icon.png')
          },
          {
              name:'Best',
              view:<Page2/>,
             img:require('./assets/icon.png')
          }
          
          ]
      }
      style={{width:'100%',
        height:'10%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'orange'}}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
