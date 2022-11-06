<template>
    <Title/>
    <div class="my-3">
        <div class="container">
            <Filter />
        </div>
        <NewsList type-news="everything" :news="news" />
    </div>
</template>

<script>
import Filter from "@/components/Everything/Filter";
import NewsList from "@/components/News/NewsList";
import Title from "@/components/General/Title";
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "EverythingPage.vue",
    components: {
        NewsList,
        Filter,
        Title
    },
    computed: {
        ...mapGetters(['getStatusNewsEverything', 'getMessageNewsEverything', 'getNewsEverything']),
        status() {
            return this.getStatusNewsEverything;
        },
        message() {
            return this.getMessageNewsEverything;
        },
        news() {
            return this.getNewsEverything;
        }
    },
    mounted() {
        this.loadNewsEverything();
    },
    methods: {
        ...mapActions(['loadNewsEverything']),
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