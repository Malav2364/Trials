import {Image, StyleSheet } from "react-native";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';


export default function TabThreeScreen(){
    return(
        <View style={styles.containerOne}>
            <View style={styles.profileContainer}>
                <Image source={require('./assets/profile.jpg')} style={styles.profileImage}/>
            </View>
            <View>
                <Text style={styles.title}>Malav Patel</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerOne: {
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    profileContainer: {
        width: 120, // Outer ring diameter
        height: 120,
        borderRadius: 60, // Half of width and height for circular shape
        borderWidth: 4, // Thickness of the ring
        borderColor: '#3498db', // Color of the ring
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    profileImage: {
        width: 100, // Inner image diameter
        height: 100,
        borderRadius: 50, // Half of width and height for circular shape
    },
    title: {
        fontSize:32,
        fontWeight:'bold',
        marginTop:20
    },
})