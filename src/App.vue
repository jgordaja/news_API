<template>
    <Header />
    <router-view/>
</template>

<script>
import Header from "@/components/General/Header/Header";

export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss">
#app {
    font-family: 'Lato', sans-serif;

    .nav__link-activ,
    .nav__link:hover {
        color: #18B5DC;
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
        font-family: inherit;
    }

    img {
        width: 100%;
        display: block;
    }
}

</style>