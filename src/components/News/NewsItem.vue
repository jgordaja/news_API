<template>
    <div class="col">
        <div class="card shadow-sm">
            <img v-if="itemNews.urlToImage" :src="itemNews.urlToImage" alt="#" width="100%" height="225">
            <svg v-else class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: No picture" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em" dominant-baseline="middle" text-anchor="middle">No picture</text>
            </svg>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="small word-wrap">{{ itemNews.source.name }}</span>
                    <span class="small word-wrap">{{ itemNews.author }}</span>
                </div>
                <p class="card-text mb-2 fw-bold">{{ itemNews.title }}</p>
                <p class="card-text">{{ itemNews.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <a type="button" class="btn btn-sm btn-outline-info" :href="itemNews.url" target="_blank">
                            View
                        </a>
                    </div>
                    <small class="text-muted">{{ publishedAt }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "NewsItem",
    props: {
        itemNews: { type: Object, required: true }
    },
    computed: {
        publishedAt() {
            return moment(this.itemNews.publishedAt).format('DD.MM.YYYY');
        }
    }
}
</script>

<style>
.word-wrap {
    overflow-wrap: anywhere;
}
</style>