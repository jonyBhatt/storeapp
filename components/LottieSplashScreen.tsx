import LottieView from "lottie-react-native";
import { Dispatch, SetStateAction } from "react";

interface SplashScreenProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
function SplashScreen({ setIsLoading }: SplashScreenProps) {
  return (
    <LottieView
      source={require("../assets/lottie/splash2.json")}
      style={{
        width: 200,
        height: 200,
      }}
      autoPlay
      loop={false}
      resizeMode="cover"
      onAnimationFinish={() => setIsLoading(false)}
    />
  );
}
export default SplashScreen;
