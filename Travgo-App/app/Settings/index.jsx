import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const profile = require("@/assets/images/boy.png")
const location = require("@/assets/images/location.png")
const edit = require("@/assets/images/edit.png")
const arrow = require("@/assets/images/ForArrow.png")
const Card = require("@/assets/images/Card.png")
const Security = require("@/assets/images/security.png")
const Delete = require("@/assets/images/delete.png")
const Theme = require("@/assets/images/nightMode.png")
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Image source={location} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>My Address</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 100, marginTop: 5 }} />
                    </View>
                </Link>

                <Link href={"Payment"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Image source={Card} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Payment Method</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 45, marginTop: 5 }} />
                    </View>
                </Link>
            </View>

            <View style={{ paddingTop: 25, paddingLeft: 30, }}>
                <Text style={{ fontWeight: 400 }}>Security</Text>
                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Feather name="lock" size={26} color="black" style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Change Password</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 35, marginTop: 5 }} />
                    </View>
                </Link>

                <Link href={"Payment"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Feather name="unlock" size={26} color="black" style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 18 }}>Forgot Password</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 50, marginTop: 5 }} />
                    </View>
                </Link>

                <Link href={"Payment"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Image source={Security} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 22 }}>Security</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 143, marginTop: 5 }} />
                    </View>
                </Link>

                <Link href={"Payment"}>
                    <View style={{ flexDirection: "row", width: 320, paddingVertical: 15 }}>
                        <Ionicons name="notifications-outline" size={28} color="black" />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 18 }}>Notifications</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 90, marginTop: 5 }} />
                    </View>
                </Link>

            </View>

            <View style={{ paddingTop: 25, paddingLeft: 30, }}>
                <Text style={{ fontWeight: 400 }}>General</Text>
                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, alignContent: "center", paddingVertical: 15 }}>
                        <MaterialIcons name="language" size={28} color="black" />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Language</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 120, alignSelf: "center" }} />
                    </View>
                </Link>

                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, alignContent: "center", paddingVertical: 15 }}>
                        <Image source={Delete} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Clear Cache</Text>
                        <Text style={{ alignSelf: "center", color: "#ababab", marginLeft: 80 }}>88 MB</Text>
                    </View>
                </Link>
            </View>

            <View style={{ paddingTop: 25, paddingLeft: 30, }}>
                <Text style={{ fontWeight: 400 }}>About</Text>
                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, alignContent: "center", paddingVertical: 15 }}>
                        <Feather name="shield" size={28} color="black" />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Legal and Policies</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 30, alignSelf: "center" }} />
                    </View>
                </Link>

                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, alignContent: "center", paddingVertical: 15 }}>
                        <Feather name="help-circle" size={28} color="black" />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Help & Support</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 62, alignSelf: "center" }} />
                    </View>
                </Link>

                <Link href={"MyAddress"}>
                    <View style={{ flexDirection: "row", width: 320, alignContent: "center", paddingVertical: 15 }}>
                        <Image source={Theme} style={{ marginTop: 5 }} />
                        <Text style={{ fontSize: 24, fontWeight: 500, flexGrow: 0, marginLeft: 20 }}>Dark Mode</Text>
                        <Image source={arrow} style={{ tintColor: "#ababab", marginLeft: 110, alignSelf: "center" }} />
                    </View>
                </Link>
                <Pressable>
                    
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default App