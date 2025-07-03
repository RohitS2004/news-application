import { styles } from "@/styles/news_card.styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Card, Chip, Icon, Snackbar, Text } from "react-native-paper";

const NewsCard = ({
    title,
    author,
    date,
    description,
    image,
}: {
    title: string;
    author: string;
    date: string;
    description: string;
    image: string;
}) => {
    const [bookmarked, setBookmarked] = useState<boolean>(false);
    const router = useRouter();

    const handlePress = () => {
        // navigate to the news_description page and pass the props to that page
        router.push({
            pathname: "/news_description",
            params: {
                title,
                author,
                date,
                description,
                image
            }
        })
    }

    return (
        <Card
        mode="elevated"
        style={styles.card}
        onPress={handlePress}
        >
            <Card.Cover
                source={{
                    uri: image,
                }}
            />

            <Card.Title
                title={title}
                titleStyle={{
                    fontWeight: "800",
                }}
            />

            <Card.Content>
                <Text
                    variant="bodyMedium"
                    numberOfLines={4}
                    style={{ marginVertical: 20 }}
                >
                    {description}
                </Text>
                <Text variant="headlineSmall">{author}</Text>
            </Card.Content>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginTop: 20,
                }}
            >
                <Pressable
                    onPress={() =>
                        setBookmarked((prevBookmarked) => !prevBookmarked)
                    }
                >
                    <Icon
                        source={bookmarked ? "bookmark" : "bookmark-outline"}
                        size={32}
                    />
                </Pressable>
                <Chip mode="flat" style={styles.chip}>
                    <Text style={styles.chip_text} variant="labelSmall">
                        {date}
                    </Text>
                </Chip>
            </View>
        </Card>
    );
};

export default NewsCard;
