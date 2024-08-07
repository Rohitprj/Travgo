import { View, Text, Dimensions, Switch } from "react-native";
import React from "react";

export default function Security() {
  const [FaceId, setFaceId] = React.useState(false);
  const FaceIdToggle = () => setFaceId((previousState) => !previousState);

  const [Password, setPassword] = React.useState(false);
  const PasswordToggle = () => setPassword((previousState) => !previousState);

  const [TouchId, setTouchId] = React.useState(false);
  const TouchIdToggle = () => setTouchId((previousState) => !previousState);
  
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 40,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: "#e3e7ec",
          height: 260,
          width: 300,
          borderRadius: 10,
          gap: 12,
        }}
      >
        <Text style={{ fontWeight: "500", color: "grey" }}>
          Messages Notifications
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Face ID</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={FaceId ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={FaceIdToggle}
            value={FaceId}
          />
        </View>
        <View
          style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Remember Password</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={Password ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={PasswordToggle}
            value={Password}
          />
        </View>
        <View
          style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Touch ID</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={TouchId ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={TouchIdToggle}
            value={TouchId}
          />
        </View>
      </View>
    </View>
  );
}
