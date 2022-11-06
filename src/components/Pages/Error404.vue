<template>
    <img src="https://assets.awwwards.com/assets/redesign/images/pages/404/bg.jpg">
    <button class="btn btn-info d-flex mx-auto justify-content-center mt-5 center-btn" @click="$router.back()">
        Back
    </button>
</template>

<script>
export default {
    name: "Error404"
}
</script>

<style scoped>
    .error_img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        z-index: -1;
        max-width: 100%;
    }

    .center-btn {
        width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>