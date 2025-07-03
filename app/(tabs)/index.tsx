import NewsCard from "@/components/NewsCard";
import { styles } from "@/styles/latest_news.styles";
import generateFakeNews from "@/utility/fake_news";
import { FlatList, View } from "react-native";

const LatestNews = () => {

    const latest_news = generateFakeNews(10);

    return (
        <View
        style={styles.container}
        >
            <FlatList 
            data={latest_news}
            keyExtractor={(item, index) => item.author + index}
            renderItem={({item}) => <NewsCard 
            title={item.title}
            author={item.author}
            description={item.description}
            date={item.date}
            image={item.image}
            />}
            />
        </View>
    )
}

export default LatestNews;