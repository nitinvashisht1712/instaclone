import React from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import StoryPanel from './components/StoryPanel'
import Post1 from './components/Post1'
import Post2 from './components/Post2';
import Post3 from './components/Post3';
export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.header}>
        
       <TouchableOpacity>
       <View>
       <Image source= {(require('./assets/add.jpg'))}
         style={{height:48, width:48, margin:5, }}
       />    
       </View>
</TouchableOpacity>
         <Image source= {(require('./assets/header.jpg'))}
         style={{height:50, width:120, marginVertical:5, marginLeft:85}} />

<TouchableOpacity>
       <View>
       <Image source= {(require('./assets/dm.jpg'))}
         style={{height:48, width:48, marginLeft:75,marginVertical:5 }}
       />    
       </View>
</TouchableOpacity>
      </View>
     <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <StoryPanel/>
      <Post1/>
      <Post2/>
      <Post3/>
      </ScrollView>  
      
      <View
 style={styles.bottomnavbar}>  
      <TouchableOpacity>
         <View>
           <Image source={(require('./assets/home.jpg'))}
             style={{height:40, width:40,marginLeft:20,marginVertical:5}}
           />
         </View>

      </TouchableOpacity>
      <TouchableOpacity>
         <View>
           <Image source={(require('./assets/search.jpg'))}
             style={{height:40, width:40,marginLeft:40,marginVertical:5}}
           />
         </View>

      </TouchableOpacity>
      <TouchableOpacity>
         <View>
           <Image source={(require('./assets/reels.jpg'))}
             style={{height:40, width:40,marginLeft:40,marginVertical:5}}
           />
         </View>

      </TouchableOpacity>
      <TouchableOpacity>
         <View>
           <Image source={(require('./assets/heart.jpg'))}
             style={{height:40, width:40,marginLeft:40,marginVertical:5}}
           />
         </View>

      </TouchableOpacity>
      <TouchableOpacity>
         <View>
           <Image source={(require('./assets/story1.jpg'))}
             style={{height:30, width:30,borderRadius:15,marginLeft:40,marginVertical:8}}
           />
         </View>

      </TouchableOpacity>
    </View>
    
    
  
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    backgroundColor: '#fff',
    flex:1,
    
    
  },
  header:{
 flexDirection:"row",
 backgroundColor:'#FFF',
 width:'100%',
 height:60,
  },
  bottomnavbar:{
    borderBottomColor:'#C0C0C0',
    borderTopWidth:0.55,
    width:'100%',
    height:50,
    overflow: 'hidden',
    backgroundColor:'#FFF',
    flexDirection:'row',
  },
  bottomnavbaricons:{
    
    marginHorizontal:10,
    marginVertical:5,
  },
  scrollView:{
    flex:1,
   width:'100%',
  
  }
});
