<template>

  <Navbar />
  <Balatro class="page-background" :is-rotate="false" :mouse-interaction="true" :pixel-filter="700" />
  <router-view />
</template>

<script setup>

import Balatro from './components/layout/Balatro.vue';
import Navbar from './components/layout/Navbar.vue';

</script>
<style scoped>
.page-background {
    position: absolute;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    background: #000;
    z-index: -1;
}

</style>
