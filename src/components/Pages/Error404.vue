<template>
    <div class="error-page">
        <button
            class="btn btn-info d-flex mx-auto justify-content-center mt-5 center-btn"
            @click="$router.back()"
        >
            Back
        </button>
    </div>
</template>

<script>
export default {
    name: "Error404"
}
</script>

<style scoped>
    .error-page {
        height: 90vh;
        width: 100vw;
        background-image: url("https://assets.awwwards.com/assets/redesign/images/pages/404/bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .center-btn {
        width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>