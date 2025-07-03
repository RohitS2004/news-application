import { styles } from "@/styles/news_card.styles";
import { Card, Chip, Text } from "react-native-paper";

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
    return (
        <Card mode="elevated" style={styles.card}>
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
            <Chip mode="flat" style={styles.chip}>
                <Text style={styles.chip_text} variant="labelSmall">
                    {date}
                </Text>
            </Chip>
        </Card>
    );
};

export default NewsCard;
