import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

const Post2 = () => {
 let [heartfilled, setHeartFilled] = useState(false);
 let [isSaved, setIsSaved] = useState(false);

return(
    <View style={styles.container}>
    <View style={styles.postHeader}>
<Image   source= {(require('../assets/story6.jpg'))}
    style={{height:30, width:30, borderRadius:15, position:'relative', left:5}}
/>
<Text style={{textAlignVertical:'center', position:'relative',left:12}}> harrygyum0</Text>
<TouchableOpacity>
<View  style={{flexDirection:'row',height:20, width:20,  marginLeft:270, marginVertical:6 }}>
<Image source={(require('../assets/ellipsis.png'))}
    style={{height:18, width:15}}
/>
</View>
</TouchableOpacity>

    </View>
<Image source={(require('../assets/pic2.jpg'))}
    style={{height:350, width:400}}
/>

<View style={styles.likecommentbar}>
<TouchableOpacity onPress={() =>{ 
        if(heartfilled){
            setHeartFilled(false)}
          else 
          setHeartFilled(true)
          }}>
{heartfilled ? 
    <View>
        <Image source = {(require('../assets/heartFilled.jpg'))}
            style={{height:32, width:32, marginLeft:10}}
        />
    </View> :
    <View>
        <Image source = {(require('../assets/heartnotfilled.jpg'))}
            style={{height:32, width:32, marginLeft:10}}
        />
    </View>
}
    
</TouchableOpacity>
<TouchableOpacity>
    <View>
        <Image source = {(require('../assets/comment.jpg'))}
            style={{height:32, width:32, marginLeft:10}}
        />
    </View>
</TouchableOpacity>
<TouchableOpacity>
    <View>
        <Image source = {(require('../assets/share.jpg'))}
            style={{height:32, width:32, marginLeft:10}}
        />
    </View>
</TouchableOpacity>
<TouchableOpacity onPress={() =>{ 
        if(isSaved){
            setIsSaved(false)}
          else 
          setIsSaved(true)
          }}>
{isSaved ? 
    <View>
        <Image source = {(require('../assets/notsaved.jpg'))}
            style={{height:32, width:32, marginLeft:220}}
        />
    </View> :
    <View>
        <Image source = {(require('../assets/saved.jpg'))}
            style={{height:32, width:32, marginLeft:220}}
        />
    </View>
}
    
</TouchableOpacity>

</View>
<View style={{height:30, width:400, flexDirection:'row', backgroundColor:'#FFF'}}>
<View style={{height:30, width:30, borderRadius:15, borderWidth:3, borderColor:"#FFF",alignItems:'center',justifyContent:'center',position:'absolute',left:50}}>
    <Image source={(require('../assets/story2.jpg'))}
        style={{height:24, width:24, borderRadius:12}}
    />
</View>
<View style={{height:30, width:30, borderRadius:15, borderWidth:3, borderColor:"#FFF",alignItems:'center',justifyContent:'center',position:'absolute',left:30}}>
    <Image source={(require('../assets/story3.jpg'))}
        style={{height:24, width:24, borderRadius:12}}
    />
</View>
<View style={{height:30, width:30, borderRadius:15, borderWidth:3, borderColor:"#FFF",alignItems:'center',justifyContent:'center',position:'absolute',left:10}}>
    <Image source={(require('../assets/story4.jpg'))}
        style={{height:24, width:24, borderRadius:12}}
    />
</View>
{heartfilled ? 
    <Text style={{marginLeft:88, marginVertical:5}}>Liked by ethan001 and 100 others</Text>
     :
     <Text style={{marginLeft:88, marginVertical:5}}>Liked by ethan001 and 99 others</Text>
}
</View>
<View style={{height:20, width:"100%",flexDirection:'row' }}>
<Text style={{fontWeight:'bold', marginLeft:15}}>harrygyum0</Text>
<Text style={{marginLeft:15}}>Rate this Click</Text>
</View>
<Text style={{marginLeft:15, color:'#A9A9A9'}}>View all 3 comments</Text>
<View style={{height:20, width:"100%",flexDirection:'row' }}>
<Text style={{fontWeight:'bold', marginLeft:15}}>ethan001</Text>
<Text style={{marginLeft:15}}>cool</Text>
<Image source={(require('../assets/like.png'))}
    style={{height:15, width:15, tintColor:'#D0D0D0',marginVertical:1, marginLeft:270}}
/>
</View>
<View style={{height:20, width:"100%",flexDirection:'row', marginHorizontal:15 }}>
<Image source={(require('../assets/story1.jpg'))}
style={{height:30, width:30, borderRadius:15}}/>
<TextInput placeholder={' Add a comment...'}
    style={styles.addComment}
/>
</View>

<Text style={{marginLeft:15, marginTop:10, color:'#A9A9A9'}}>9 hour ago</Text>
</View>











)



}

const styles = StyleSheet.create({
    container :{
    height:600,
    width:400,
 


    },
    postHeader:{
        paddingVertical:9,
    paddingHorizontal:10,
     backgroundColor:'#FFF',
     height:50,
    flexDirection:'row',
    width:400,

    },
    likecommentbar:{
    backgroundColor:'#FFF',
    paddingVertical:10,
    flexDirection:'row',
    height:45,
    width:400,
    },
    addComment:{
        height:20,
        width:250,
        margin:5,
    }


})
export default Post2;