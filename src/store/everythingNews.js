export default {
    state: {
        searchPhraseNewsEverything: 'elon musk',
        dateFrom: '',
        dateTo: '',
        sortByParam: 'publishedAt',
        sortByArray: ['publishedAt', 'popularity', 'relevancy'],
        newsEverything: [],
        pageNewsEverything: 1,
        pageSizeNewsEverything: 9,
        totalResultsNewsEverything: 0,
        statusNewsEverything: null,
        messageNewsEverything: ''
    },
    getters: {
        getSortByArray(state) {
            return state.sortByArray;
        },
        getNewsEverything(state) {
            return state.newsEverything;
        },
        getTotalResultsNewsEverything(state) {
            return state.totalResultsNewsEverything;
        },
        getStatusNewsEverything(state) {
            return state.statusNewsEverything;
        },
        getMessageNewsEverything(state) {
            return state.messageNewsEverything;
        }
    },
    mutations: {
        setSortBy(state, sortBy) {
            state.sortByParam = sortBy;
        },
        setDateFrom(state, dateFrom) {
            state.dateFrom = dateFrom;
        },
        setDateTo(state, dateTo) {
            state.dateTo = dateTo;
        },
        setSearchPhraseNewsEverything(state, searchPhraseNewsEverything) {
            state.searchPhraseNewsEverything = searchPhraseNewsEverything;
        },
        setStatusNewsEverything(state, statusNewsEverything) {
            state.statusNewsEverything = statusNewsEverything;
        },
        setNewsEverything(state, news) {
            state.newsEverything = news;
        },
        setMessageNewsEverything(state, messageNewsEverything) {
            state.messageNewsEverything = messageNewsEverything;
        },
        setTotalResultsNewsEverything(state, totalResultsNewsEverything) {
            state.totalResultsNewsEverything = totalResultsNewsEverything;
        },
        setPageNewsEverything(state, pageNewsEverything) {
            state.pageNewsEverything = pageNewsEverything;
        }
    },
    actions: {
        loadNewsEverything({commit, state, rootState}) {
            let params = {
                apiKey: rootState.API_KEY,
                from: state.dateFrom,
                to: state.dateTo,
                sortBy: state.sortByParam,
                q: state.searchPhraseNewsEverything,
                pageSize: state.pageSizeNewsEverything,
                page: state.pageNewsEverything
            };

            axios.get(`${rootState.URL}${rootState.EVERYTHING}`, { params: params})
                .then((response) => {
                    console.log(response);
                    commit('setStatusNewsEverything', response.data.status);
                    commit('setNewsEverything', response.data.articles);
                    commit('setTotalResultsNewsEverything', response.data.totalResults);
                })
                .catch((error) => {
                    console.log('error', error)
                    commit('setStatusNewsEverything', error.response.data.status);
                    commit('setMessageNewsEverything', error.response.data.message);
                });
        }
    }
}