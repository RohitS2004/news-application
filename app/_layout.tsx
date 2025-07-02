import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const RootLayout = () => {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "#000"
                }}
                >
                    <Stack 
                    screenOptions={{
                        headerShown: false
                    }}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    )
}

export default RootLayout;