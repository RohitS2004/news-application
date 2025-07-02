import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

const TabsLayout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: {
                backgroundColor: "#000",
                borderTopWidth: 0,
                height: 60
            },
        }}
        >
            <Tabs.Screen 
            name="index"
            options={{
                headerShown: false,
                tabBarIcon: (props) => <Icon source={"earth"} {...props}/>,
                tabBarLabel: "Latest News",
                tabBarActiveTintColor: "#02F02E",
                tabBarInactiveTintColor: "#487A51"
            }}
            />

            <Tabs.Screen 
            name="news"
            options={{
                headerShown: false,
                tabBarIcon: (props) => <Icon source={"newspaper"} {...props} />,
                tabBarLabel: "All News",
                tabBarActiveTintColor: "#02F02E",
                tabBarInactiveTintColor: "#487A51"
            }}
            />

            <Tabs.Screen 
            name="bookmark"
            options={{
                headerShown: false,
                tabBarIcon: (props) => <Icon source={"bookmark"} {...props} />,
                tabBarLabel: "Bookmarks",
                tabBarActiveTintColor: "#02F02E",
                tabBarInactiveTintColor: "#487A51"
            }}
            />
        </Tabs>
    )
}

export default TabsLayout;