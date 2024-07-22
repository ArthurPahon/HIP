import { ThemedText } from "@/components/ThemedText";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";



export default function Index() {
  const [gender, setGender] = useState("");
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Health</ThemedText>
        <ThemedText type="title">Is</ThemedText>
        <ThemedText type="title">Precious</ThemedText>
        <ThemedText type="subtitle">Take care of it</ThemedText>
      </View>
      <View style={styles.infos}>
        <ThemedText type="default" style={{ paddingTop: 100 }}>
          Select your sex
        </ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#151718",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 30,
    borderWidth: 4,
    borderColor: "blue",
  },
  infos: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "green",
  },
});