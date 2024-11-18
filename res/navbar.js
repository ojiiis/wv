import {useState} from 'react';
import {StyleSheet,Pressable, View, Text,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window');
const tabLenght = 0;
export function NavBar({tabs,active="",style,action = null}){
const [main,setMain] = useState(active);
    function setActive(tab){
        setMain(tab.name)
        if(typeof action == "function"){ action(tab)
        }
    }
    return (
    <View style={style}>
{
    tabs.map((tab,i)=>(
      <Pressable
        onPress={()=>setActive(tab)}
        style={sty.tab}
        key={i}
        >
           <View
        style={[sty.active,{backgroundColor:tab.name == main?'green':''}]}
           >
             <Text>{tab.name}</Text>
           </View>
        </Pressable>
        
    ))
}
    </View>
        );
}

const sty = StyleSheet.create({
    active:{
        width:'100%',
        height:'100%'
    },
    tab:{
        width:(width/tabLenght) - (tabLenght*2),
        height:height*0.90
    }
});
