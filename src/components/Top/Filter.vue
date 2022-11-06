<template>
    <h2 class="mb-4">
        Search Top News
    </h2>
    <div class="row align-items-end ">
        <div class="col-lg-4 col-md-8 mb-3">
            <label class="mb-1">Select country</label>
            <select v-model="country" class="form-select">
                <option value=""></option>
                <option v-for="country in countries" :value="country.value">{{ country.label }}</option>
            </select>
        </div>
        <div class="col-lg-4 col-md-8 mb-3">
            <label class="mb-1">Select category</label>
            <select v-model="category" class="form-select">
                <option value=""></option>
                <option v-for="category in categories" :value="category">{{ category }}</option>
            </select>
        </div>
        <div class="col-lg-4 col-md-8 mb-3">
            <Search @search-news="searchNews" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Search from "@/components/General/Search";

export default {
    name: "Filter",
    data() {
        return {
            country: 'ua',
            category: 'general',
        }
    },
    components: {
        Search,
    },
    computed: {
        ...mapGetters(['getCountries', 'getCategories']),
        countries() {
            return this.getCountries;
        },
        categories() {
            return this.getCategories;
        }
    },
    methods: {
        ...mapMutations(['setCountry', 'setCategory', 'setSearchPhraseNewsTop', 'setStatusNewsTop']),
        ...mapActions(['loadNewsTop']),
        searchNews(searchPhrase) {
            this.setStatusNewsTop(null);
            this.setCountry(this.country);
            this.setCategory(this.category);
            this.setSearchPhraseNewsTop(searchPhrase);
            this.loadNewsTop();
        },
    }
}
</script>