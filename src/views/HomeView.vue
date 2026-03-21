<template>

    <Balatro class="page-background" :is-rotate="false" :mouse-interaction="true" :pixel-filter="700" />
    <AppMain class="page-content" />
    
</template>

<script setup lang="ts">
import Balatro from '@/components/layout/Balatro.vue';
import AppMain from '@/components/AppMain.vue';
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

.page-content {
    position: relative;
    z-index: 1;
    color: white;
    padding: 1.5rem;
    height: 100vh;
}
</style>
