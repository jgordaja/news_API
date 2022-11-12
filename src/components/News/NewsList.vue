<template>
    <div v-if="news && news.length" class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <template v-for="(itemNews, index) in news" :key="index">
                    <NewsItem :item-news="itemNews" />
                </template>
            </div>
            <div class="paginator">
                <Pagination
                    v-model="page"
                    :records="+totalResults"
                    :per-page="9"
                    :options="paginationOptions"
                    @paginate="searchNews"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import NewsItem from "@/components/News/NewsItem";
import Pagination from 'v-pagination-3';

export default {
    name: "NewsList",
    components: {
        NewsItem,
        Pagination
    },
    props: {
        news: { type: Array, required: true, default: [] },
        typeNews: { type: String, required: true }
    },
    data() {
        return {
            page: 1,
            paginationOptions: {
                chunk: 3,
            }
        }
    },
    computed: {
        ...mapGetters(['getTotalResultsNewsTop', 'getTotalResultsNewsEverything']),
        totalResults() {
            if (this.typeNews === 'top') {
                return this.getTotalResultsNewsTop;
            }
            if (this.typeNews === 'everything') {
                return this.getTotalResultsNewsEverything;
            }
        }
    },
    updated() {
        if (!this.news.length) {
            this.$swal({
                title: 'News not found!',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    },
    methods: {
        ...mapMutations(['setPageNewsTop', 'setPageNewsEverything']),
        ...mapActions(['loadNewsTop', 'loadNewsEverything']),
        searchNews() {
            if (this.typeNews === 'top') {
                this.setPageNewsTop(this.page);
                this.loadNewsTop();
            }
            if (this.typeNews === 'everything') {
                this.setPageNewsEverything(this.page);
                this.loadNewsEverything();
            }
        }
    },
}
</script>

<style>
.paginator {
    width: fit-content;
    margin: 30px auto 15px auto;
    text-align: center;
}
</style>