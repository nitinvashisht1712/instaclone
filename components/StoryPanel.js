import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';



const StoryPanel = () => {
        return(
    <View style={styles.storypannel}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


      {/* Story 1 */}
<View style={styles.eachstory}>
<Image source={require('../assets/story1.jpg')}
    style={{height:64, width:64, borderRadius:32,marginBottom:5.2}}
/>
<View 
    style={{height:20,
            width:20, 
            position:'absolute',
            bottom:25, 
            right:5, 
            backgroundColor:"#FFF",
            borderRadius:10}}>
    <Image source={require('../assets/plus.png')}
        style={{height:20, width:20, position:'absolute'}}
    />
    
</View>
<Text style={styles.storyname}>My Story</Text>

</View>


         {/* Story 2 */}


<View style={styles.eachstory}>
<View style={{height:70, width:70, borderRadius:35, borderWidth:2.25,borderColor:"#D7236E", justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/story2.jpg')}
    style={{height:62, width:62,borderRadius:31}}
/>
</View>
<Text style={styles.storyname}>Emma Li</Text>

</View>

         {/* Story 3 */}


<View style={styles.eachstory}>
<View style={{height:70, width:70, borderRadius:35, borderWidth:2.25,borderColor:"#D7236E", justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/story3.jpg')}
    style={{height:62, width:62, borderRadius:31}}
/>
</View>
<Text style={styles.storyname}>Nikki Begu</Text>
</View>

          {/* Story 4 */}


<View style={styles.eachstory}>
<View style={{height:70, width:70, borderRadius:35, borderWidth:2.25,borderColor:"#D7236E", justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/story4.jpg')}
    style={{height:62, width:62, borderRadius:31}}
/>
</View>
<Text style={styles.storyname}>Greg Mar..</Text>
</View>


          {/* Story 5 */}


<View style={styles.eachstory}>
<View style={{height:70, width:70, borderRadius:35, borderWidth:2.25,borderColor:"#D0D0D0", justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/story5.jpg')}
    style={{height:62, width:62, borderRadius:31}}
/>
</View>
<Text style={styles.storyname}>Ava Oli..</Text>
</View>


           {/* Story 6 */}


<View style={styles.eachstory}>
<View style={{height:70, width:70, borderRadius:35, borderWidth:2.25,borderColor:"#D0D0D0", justifyContent:'center',alignItems:'center'}}>
<Image source={require('../assets/story6.jpg')}
    style={{height:62, width:62, borderRadius:31}}
/>
</View>
<Text style={styles.storyname}>Harry G.</Text>
</View>


            {/* Story 7 */}  


<View style={styles.eachstory}>
<Image source={require('../assets/story7.jpg')}
    style={{height:66, width:66, borderRadius:33}}
/>
<Text style={styles.storyname}>Milli Che..</Text>
</View>

             {/* Story 8 */}


<View style={styles.eachstory}>
<Image source={require('../assets/story8.jpg')}
    style={{height:66, width:66, borderRadius:33}}
/>
<Text style={styles.storyname}>Ethan</Text>
</View>

    </ScrollView>
</View>
        )
    }


const styles = StyleSheet.create({
    
storypannel:{
    borderBottomColor:'#D0D0D0',
    borderBottomWidth:0.55,
    paddingVertical:2,
    marginVertical:5,
    marginHorizontal:2,
    backgroundColor:'#FFF',
  height:105,
  
  

},

eachstory:{
   height:100,
   width:66, 
   marginLeft:10,
   paddingTop:7,
   flexDirection:'column',
},
storyname:{
marginTop:2.5,
justifyContent:'center',
textAlign:'center',
paddingRight:5,

}

})
export default StoryPanel;