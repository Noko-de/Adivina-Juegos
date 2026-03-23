<template>
    <section class="d-flex  justify-content-center align-items-center page-content">
        <div class=" mt-5 px-3 glass rounded-5 py-4 px-md-5 text-center text-lg-start w-75  ">
            <div class="container">
                <div class="d-flex justify-content-center mb-5">
                    <input v-model="busqueda" type="text" class="form-control fs-4 search-bar w-50 text-center"
                        placeholder="Buscar juego...">
                </div>

                <!-- Grid de imágenes -->
                <div class="row g-3 d-flex align-items-center justify-content-center mb-4">
                    <div class="col-md-5" v-for="(item, index) in gameLabel" :key="index">
                        <div class="game-card p-3 text-center">

                            <img :src="item.img" class="img-fluid rounded mb-2">

                            <h5 class="text-white">
                                {{ item.label }}
                            </h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <p class="text-center mt-3 publication-date">
    Publicado: 12 Marzo 2026
</p> -->

    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex';

import {
    getGames,
} from '@/services/gameService'

const games = ref([])
const store = useStore()
const busqueda = ref('')

const loadData = async () => {
    games.value = await getGames()
/*     store.commit('setGames', games.value) */
}


const startGame = computed(() => {
    return games.value[0] || null
})

const gameLabel = computed(() => {
    if (!startGame.value) return []

    const juego = startGame.value

    return [
        { label: juego.year, img: juego.img },
        { label: juego.genero, img: juego.img },
        { label: juego.distribuidor, img: juego.img },
        { label: juego.consola, img: juego.img }
    ]
})

onMounted(loadData)





</script>


<style scoped>
/* Buscador */
.search-bar {
    background: #00000066;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    transition: 0.3s ease;
}

.search-bar:focus {
    border-color: #16a78f;
    box-shadow: 0 0 10px rgba(22, 167, 143, 0.5);
    background: #00000066;
    color: #fff;

}

/* Tarjeta de juego */
.game-card {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(22, 167, 143, 0.3);
}

/* Placeholder de imagen */
.image-placeholder {
    height: 240px;
    background: linear-gradient(135deg, #680b75, #16a78f);
    border-radius: 12px;
}

/* Fecha */
.publication-date {
    color: #ffffffb3;
    font-size: 0.9rem;
}

/* animación de error */
.error {
    animation-name: tilt-shaking;
    animation-duration: 0.8s;
    -webkit-animation-name: tilt-shaking;
    -webkit-animation-duration: 0.8s;
}


@keyframes tilt-shaking {
    0% {
        transform: translate(0)
    }

    20% {
        transform: translate(-2px, 2px)
    }

    40% {
        transform: translate(-2px, -2px)
    }

    60% {
        transform: translate(2px, 2px);
        border: 6px solid #ff0000;
    }

    80% {
        transform: translate(2px, -2px)
    }

    100% {
        transform: translate(0)
    }
}
</style>