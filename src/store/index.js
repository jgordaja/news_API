import { createStore } from 'vuex';
import topNews from "@/store/topNews";
import everythingNews from "@/store/everythingNews";

export default createStore({
    modules: {
        topNews,
        everythingNews
    },
    state: {
        API_KEY: '8a9f0972d8a84433a8a8768665e009d2',
        URL: 'https://newsapi.org/v2',
        TOP_HEADLINES: '/top-headlines',
        EVERYTHING: '/everything',
    }
})
