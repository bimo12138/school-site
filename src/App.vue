<template>
    <div class="index">
        <router-view />
        <Footer />
    </div>
</template>

<script>

import Footer from "./components/Footer";

export default {
    components: {
        Footer
    },
    created() {
        this.$store.commit("readLocal");
    }
}
</script>
