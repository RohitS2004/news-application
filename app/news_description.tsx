import { styles } from "@/styles/news_description.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { Chip, Divider, FAB, Text } from "react-native-paper";

const NewsDescription = () => {
    const { title, author, description, image, date } = useLocalSearchParams();

    // console.log(title, author, description, image, date);

    const router = useRouter();

    const handlePress = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: image as string,
                    width: 500,
                    height: 350,
                }}
                style={{
                    width: "100%",
                    marginHorizontal: "auto",
                }}
            />

            <Text variant="titleLarge" style={styles.heading}>
                {title}
            </Text>

            <Divider style={styles.divider} />

            <ScrollView>
                <Text variant="bodyMedium" style={styles.description}>
                    {description}
                </Text>

                <Text variant="titleLarge" style={styles.author}>
                    {author}
                </Text>

                <Chip mode="flat" style={styles.chip}>
                    <Text
                    variant="labelSmall"
                    style={{
                        color: "black"
                    }}
                    >   
                    {date}
                    </Text>
                </Chip>
            </ScrollView>

            <FAB
                mode="elevated"
                style={styles.fab}
                icon={"arrow-left"}
                color="black"
                onPress={handlePress}
            />
        </View>
    );
};

export default NewsDescription;
