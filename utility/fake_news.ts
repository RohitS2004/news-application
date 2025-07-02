import { faker } from "@faker-js/faker"

interface INews {
    title: string,
    author: string,
    date: string,
    description: string,
    image: string,
}

const generateFakeNews = (count: number) => {
    let all_news: INews[] = [];

    for (let i = 0; i<count; i++) {
        const title = faker.lorem.words(5);
        const author = faker.person.fullName();
        const date = faker.date.anytime().toLocaleString();
        const description = faker.lorem.lines(10);
        const image = faker.image.urlPicsumPhotos();

        const news: INews = {
            title,
            author, 
            date,
            description,
            image
        }

        all_news.push(news);
    }

    return all_news;
}

// Use the faker library to generate fake data and then aggregate them to form some fake news articles
