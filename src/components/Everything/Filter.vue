<template>
    <h2 class="mb-4">
        Search everything news
    </h2>
    <div class="row align-items-end ">
        <div class="col-lg-3 col-md-6 mb-3">
            <label class="mb-1">Sort by</label>
            <select v-model="sortBy" class="form-select">
                <option value=""></option>
                <option v-for="sortByItem in sortByArray" :value="sortByItem">{{ sortByItem }}</option>
            </select>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <label class="mb-1">Date From</label>
            <input type="date" v-model="dateFrom" class="form-select">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <label class="mb-1">Date To</label>
            <input type="date" v-model="dateTo" class="form-select">
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <Search search="elon musk" @search-news="searchNews" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Search from "@/components/General/Search";
import moment from 'moment';

export default {
    name: "Filter",
    components: {
        Search
    },
    data() {
        return {
            dateFrom: moment().format('YYYY-MM-DD'),
            dateTo: moment().format('YYYY-MM-DD'),
            sortBy: 'publishedAt',
        }
    },
    computed: {
        ...mapGetters(['getSortByArray']),
        sortByArray() {
            return this.getSortByArray;
        },
    },
    methods: {
        ...mapMutations(['setSortBy', 'setDateFrom', 'setDateTo', 'setSearchPhraseNewsEverything', 'setStatusNewsEverything']),
        ...mapActions(['loadNewsEverything']),
        searchNews(searchPhrase) {
            this.setStatusNewsEverything(null);
            this.setSortBy(this.sortBy);
            this.setDateFrom(this.dateFrom);
            this.setDateTo(this.dateTo);
            this.setSearchPhraseNewsEverything(searchPhrase);
            this.loadNewsEverything();
        },
    }
}
</script>