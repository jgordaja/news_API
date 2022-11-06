<template>
    <Title />
    <div class="my-3">
        <div class="container">
            <Filter />
        </div>
        <NewsList type-news="top" :news="news" />
    </div>
</template>

<script>
import NewsList from "@/components/News/NewsList";
import Title from "@/components/General/Title";
import Filter from "@/components/Top/Filter";
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "TopPage",
    components: {
        NewsList,
        Filter,
        Title
    },
    computed: {
        ...mapGetters(['getStatusNewsTop', 'getMessageNewsTop', 'getNewsTop']),
        status() {
            return this.getStatusNewsTop;
        },
        message() {
            return this.getMessageNewsTop;
        },
        news() {
            return this.getNewsTop;
        }
    },
    mounted() {
        this.loadNewsTop();
    },
    methods: {
        ...mapActions(['loadNewsTop']),
    },
    watch: {
        status(newValue) {
            if (newValue === 'error') {
                this.$swal({
                    title: 'Error!',
                    text: this.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    }
}
</script>