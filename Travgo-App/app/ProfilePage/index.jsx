import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
const profile = require("@/assets/images/boy.png")
const location = require("@/assets/images/location.png")


const App = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: "row",padding:15,paddingLeft:30}}>
                <Image source={profile} />
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 400,marginLeft:15}}>Rohit Kumar</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={location} style={{tintColor:"#ababab",height:17,width:17,marginLeft:15,marginTop:2}}/>
                        <Text style={{color:"#ababab",fontSize:16,fontWeight:600,marginLeft:5}}>Delhi, India</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default App