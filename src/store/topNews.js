export default {
    state: {
        countries: [
            {
                value: 'ua',
                label: 'Ukraine'
            },
            {
                value: 'ru',
                label: 'Rashka - enemy'
            },
            {
                value: 'us',
                label: 'USA'
            },
            {
                value: 'fr',
                label: 'France'
            },
        ],
        categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
        searchPhraseNewsTop: '',
        country: 'ua',
        category: '',
        newsTop: [],
        pageNewsTop: 1,
        pageSizeNewsTop: 9,
        totalResultsNewsTop: 0,
        statusNewsTop: null,
        messageNewsTop: ''
    },
    getters: {
        getCountries(state) {
            return state.countries;
        },
        getCategories(state) {
            return state.categories;
        },
        getNewsTop(state) {
            return state.newsTop;
        },
        getTotalResultsNewsTop(state) {
            return state.totalResultsNewsTop;
        },
        getStatusNewsTop(state) {
            return state.statusNewsTop;
        },
        getMessageNewsTop(state) {
            return state.messageNewsTop;
        }
    },
    mutations: {
        setCountry(state, country) {
            state.country = country;
        },
        setCategory(state, category) {
            state.category = category;
        },
        setSearchPhraseNewsTop(state, searchPhrase) {
            state.searchPhraseNewsTop = searchPhrase;
        },
        setNewsTop(state, news) {
            state.newsTop = news;
        },
        setTotalResultsNewsTop(state, totalResults) {
            state.totalResultsNewsTop = totalResults;
        },
        setStatusNewsTop(state, status) {
            state.statusNewsTop = status;
        },
        setMessageNewsTop(state, message) {
            state.messageNewsTop = message;
        },
        setPageNewsTop(state, pageNewsTop) {
            state.pageNewsTop = pageNewsTop;
        }
    },
    actions: {
        loadNewsTop({commit, state, rootState}) {
            let params = {
                apiKey: rootState.API_KEY,
                country: state.country,
                category: state.category,
                q: state.searchPhraseNewsTop,
                pageSize: state.pageSizeNewsTop,
                page: state.pageNewsTop
            };

            axios.get(`${rootState.URL}${rootState.TOP_HEADLINES}`, { params: params})
                .then((response) => {
                    commit('setStatusNewsTop', response.data.status);
                    commit('setNewsTop', response.data.articles);
                    commit('setTotalResultsNewsTop', response.data.totalResults);
                })
                .catch((error) => {
                    commit('setStatusNewsTop', error.response.data.status);
                    commit('setMessageNewsTop', error.response.data.message);
                });
        }
    },
}