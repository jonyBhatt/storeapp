import SplashScreen from "@/components/LottieSplashScreen";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Home</Text> */}
      {isLoading ? (
        <SplashScreen setIsLoading={setIsLoading} />
      ) : (
        <Text style={styles.title}>Home</Text>
      )}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070707",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#86e2d5",
  },
});
