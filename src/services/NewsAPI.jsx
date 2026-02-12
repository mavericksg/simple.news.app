import { newsAPI } from "../configs/axiosConfigs"
import { defineCancelApiObject } from "../configs/axiosUtils"

const NewsAPI = {

    getCategoryPaginated: async function ({ category, country, page, pageSize}, cancel = false) {

        const url = `/top-headlines?category=${category}&country=${country}&page=${page}&max=${pageSize}`;
        console.log("url:" + url)
        const response = await newsAPI.request({
            url: url,
            method: "GET",
            params: {
                apikey: process.env.REACT_APP_NEWS_API
            },
            signal: cancel ? cancelApiObject[this.getPaginated.name].handleRequestCancellation().signal : undefined,
        })
        
        return response.data;
    },
    
    getSearchPaginated: async function ({ query, country, page, pageSize}, cancel = false) {

        const url = `/search?q=${query}&country=${country}&page=${page}&max=${pageSize}`;
        console.log("url:" + url);
        const response = await newsAPI.request({
            url: url,
            method: "GET",
            params: {
                apikey: process.env.REACT_APP_NEWS_API
            },
            signal: cancel ? cancelApiObject[this.getPaginated.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },
}

// defining the cancel API object for NewsAPI
const cancelApiObject = defineCancelApiObject(NewsAPI)

export default NewsAPI;