import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const profile = require("@/assets/images/boy.png")
const location = require("@/assets/images/location.png")
const edit = require("@/assets/images/edit.png")
const arrow = require("@/assets/images/ForArrow.png")


const App = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", padding: 15, paddingLeft: 30 }}>

                <Image source={profile} />

                <View>
                    <Text style={{ fontSize: 25, fontWeight: 400, marginLeft: 15 }}>Rohit Kumar</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={location} style={{ tintColor: "#ababab", height: 17, width: 17, marginLeft: 15, marginTop: 2 }} />
                        <Text style={{ color: "#ababab", fontSize: 16, fontWeight: 600, marginLeft: 5 }}>Delhi, India</Text>
                    </View>
                </View>

                <Link href={"Profile"} style={{ marginLeft: 50, marginTop: 10 }}>
                    <Image source={edit} />
                </Link>

            </View>

            <View style={{ paddingTop: 15, paddingLeft: 30, }}>
                <Text style={{ fontWeight: 400 }}>Personal Info</Text>
                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 10 }}>
                        <Image source={location} style={{ marginTop:5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20}}>My Address</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab",marginLeft:100 , marginTop:5}} />
                    </View>
                </Link>
            </View>

        </ScrollView>
    )
}

export default App