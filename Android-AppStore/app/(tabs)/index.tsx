import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("Witaj w naszym App Store!");

  const handleChangeMessage = () => {
    setMessage("Przycisk działa!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <Button
        title="Kliknij mnie"
        onPress={handleChangeMessage}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});