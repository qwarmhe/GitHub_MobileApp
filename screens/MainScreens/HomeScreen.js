import React from "react";
import { MaterialIcons, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const HomeScreen=({navigation})=>{
    return(
        <View style={styles.container}>

        <View style={styles.Sub_View}>

        <View>
            <Text style={{
                fontSize:18,
                fontWeight:'bold'
            }}>My Work</Text>
        </View>

       <TouchableOpacity
       onPress={()=>navigation.navigate('Assigned',{
           screen:'AssignedScreen'
       })}
       >
       <View style={styles.IssueView}>
        <View style={styles.IssueIcon}>
        
        <MaterialIcons
                    name="error-outline"
                    size={30}
                    style={{
                        borderWidth:1,
                        borderRadius:6,
                        backgroundColor:'#23D85D',
                        color:'white',
                        borderColor:'#23D85D',
                        overflow:'hidden'
                        
                    }}
                    
                />
        
        </View>
        <View style={styles.IssueText}><Text style={{
            fontFamily:'sans-serif',
            fontSize:18
        }}>Issues</Text></View>
        </View>
       </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('Requested',{
            screen:"RequestedScreen"
        })}
        >
        <View style={styles.PullRequestView}>
        <View style={styles.PullRIcon}>
        <Ionicons
                    name="ios-git-pull-request"
                    size={28}
                    style={{
                        borderWidth:1,
                        borderRadius:6,
                        backgroundColor:'#1E83D8',
                        color:'white',
                        borderColor:'#1E83D8',
                        paddingLeft:6.5,
                        height:32
                        
                    }}
                />
        </View>

        <View style={styles.PullRText}><Text style={{
            fontFamily:'sans-serif',
            fontSize:18
        }}>Pull Request</Text></View>
      
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('Repositories',{screen:'RepositoriesScreen'})}
        >
        <View style={styles.RepositoriesView}>
        <View style={styles.RepoIcon}>
        <AntDesign
                    name="book"
                    size={30}
                    style={{
                        borderWidth:1,
                        borderRadius:6,
                        backgroundColor:'#8357D0',
                        color:'white',
                        borderColor:'#8357D0',
                        
                    }}
                />
       
        </View>    

        <View style={styles.RepoText}><Text style={{
            fontFamily:'sans-serif',
            fontSize:18
        }}>Repositories</Text></View>   
      
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('Organizations',{
            screen:'OrganizationScreen'
        })}
        >
        <View style={styles.OrganView}>
        <View style={styles.OrganIcon}>
        <Octicons
                    name="organization"
                    size={30}
                    style={{
                        borderWidth:1,
                        borderRadius:6,
                        backgroundColor:'#FB8A40',
                        color:'white',
                        borderColor:'#FB8A40',
                        
                        
                    }}
                />
        </View>

        <View style={styles.OrganText}><Text style={{
            fontFamily:'sans-serif',
            fontSize:18
        }}>Organization</Text></View>
        
        </View>
        </TouchableOpacity>
        

        </View>

        <View style={styles.FavoriteView}>
            <View style={styles.FavoriteTitle}><Text style={{
                fontFamily:'sans-serif-medium',
                fontSize:18,
                
            }}>Favorites</Text></View>

            <View style={styles.FavoriteTexts}>
                <Text style={{
                    fontFamily:'sans-serif',
                    fontSize:16,
                }}>Add favorite repositories for quick access at any</Text>
                <Text style={{
                    fontFamily:'sans-serif',
                    fontSize:16,
                    
                }}>time, without having to search</Text>
            </View>

            <View style={styles.FavoriteButton}>
                <Button
                title="ADD FAVORITES"
                style={{
                    borderRadius:5
                }}
                onPress={()=>navigation.navigate('Favorites',{
                    screen:'FavoritesScreen'
                })}
                
               
                />
            </View>
        </View>



        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'        
        
    },
    Sub_View:{
        paddingTop:35,
        paddingLeft:20
    },
    IssueView:{
        paddingTop:25,
        flexDirection:'row',
        paddingBottom:25
    },
    IssueIcon:{
        paddingRight:18,
        
    },
    IssueText:{
        paddingTop:2,
        paddingBottom:5,
        
    },
    PullRequestView:{
        paddingBottom:25,
        flexDirection:'row'
    },
    PullRIcon:{
        paddingRight:18,
        width:51,
        
    },
    PullRText:{
        paddingTop:2

    },
    RepositoriesView:{
        paddingBottom:25,
        flexDirection:'row'
    },
    RepoIcon:{
        paddingRight:18
    },
    RepoText:{
        paddingTop:2
    },
    OrganView:{
        paddingBottom:20,
        flexDirection:'row'
    },
    OrganIcon:{
        paddingRight:18
    },
    OrganText:{
        paddingTop:2
    },
    FavoriteView:{
        paddingTop:25
    },
    FavoriteTitle:{
        paddingLeft:20,
        paddingBottom:28
    },
    FavoriteTexts:{
        alignItems:'center',
        paddingBottom:20
    },
    FavoriteButton:{
        marginTop:-5,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:20,
        height:40,
        borderRadius:5
    }
    

   

});

export default HomeScreen;