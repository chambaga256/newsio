import axios from 'axios';

const api= axios.create({
    baseURL:'https://newsapi.org/v2'
})
const api_key = '9bf9d9cafee54414ae25b96444f7ffaf'


export const fetchSources = async () => {
    // const requestSource = `sources?apiKey=${api_key}`;
    try {
        const { data: { sources } } = await api.get(`/sources?apiKey=${api_key}`);

        // return sources.map((source) => source);
        return sources
    } catch (error) {
        return error;
    }
};

export const fetchNews = async (request) => {   
    try {
        const { data: { articles } } = await api.get(`/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api_key}`);

        // return articles.map((article) => (article));
        return articles
        
    } catch (error) {
        return error;
    }
};