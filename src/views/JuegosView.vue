<template>
    <section class="d-flex  justify-content-center align-items-center page-content">
        <div class=" mt-5 px-3 glass rounded-5 py-4 px-md-5 text-center text-lg-start w-75  ">
            <div class="container">
                <form class="d-flex justify-content-center mb-5 position-relative w-100" @submit.prevent="comparar">
                    <input v-model="adivinar" type="text" class="form-control fs-4 search-bar w-50 text-center"
                        placeholder="Que juego sera?">
                    <ul v-if="mostrarSugerencias" class="lista-sugerencias">
                        <li
                            v-for="game in sugerencias"
                            :key="game.id"
                            @mousedown="seleccionarJuego(game.nombre)"
                        >
                            {{ game.nombre }}
                        </li>
                    </ul>
                </form>

                <!-- Grid de imágenes -->
                <div class="row g-3 d-flex align-items-center justify-content-center mb-4">
                    <div class="col-md-5" v-for="(item, index) in gameLabel" :key="index">
                        <div class="game-card p-3 text-center position-relative">

                            <img :src="item.img" class="game-img rounded mb-2">

                            <div class="overlay" :class="{ oculto: index <= intentos }">
                                ?
                            </div>

                            <h5 class="text-white position-absolute top-0 rounded-1 mt-3 glass p-2 fs-6 label" :class="{ oculto: index > intentos }" >
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


import {
    getGames,
} from '@/services/gameService'

const games = ref([])
const adivinar = ref('')
const juegoActual = ref('')
const intentos = ref(0)

const loadData = async () => {
    games.value = await getGames()

    const randomIndex = Math.floor(Math.random() * games.value.length)
    juegoActual.value = games.value[randomIndex]
}


const gameLabel = computed(() => {
    if (!juegoActual.value) return []

    const juego = juegoActual.value

    return [
        { label: juego.year, img: juego.img[0] },
        { label: juego.genero[0], img: juego.img[1] },
        { label: juego.desarrollador, img: juego.img[2] },
        { label: juego.consola, img: juego.img[3] }
    ]
})


const comparar = () => {
    if (!juegoActual.value) return

    const respuesta = adivinar.value.toLowerCase().trim()
    const correcto = juegoActual.value.nombre.toLowerCase()

    if (respuesta === correcto) {
        alert('Correcto! lo has adivinado')
        return
    }

    intentos.value++
    /* adivinar.value = '' */
    if (intentos.value >= 4) {
        alert(`Perdiste! el juego era: ${juegoActual.value.nombre}`)
    }
}

const sugerencias = computed(() => {
    if (adivinar.value.length < 3) return []

    return games.value.filter(game =>
        game.nombre.toLowerCase().includes(adivinar.value.toLocaleLowerCase())
    )
    .slice(0, 5)
})

const seleccionarJuego = (nombre) => {
    adivinar.value = nombre
    comparar()
    adivinar.value = ''
}

const mostrarSugerencias = computed(() => {
    return adivinar.value.length >= 3 && sugerencias.value.length
})

onMounted(loadData)



</script>


<style scoped>

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

.search-bar::placeholder {
    color: #727272;
}

.lista-sugerencias {
    position: absolute;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);

    width: 50%;
    max-height: 200px;
    overflow-y: auto;

    background: #111;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;

    margin-top: 5px;
    padding: 0;
    list-style: none;

    z-index: 9999; 
}

.lista-sugerencias li {
    padding: 10px;
    cursor: pointer;
    color: white;
    transition: 0.2s;
}

.lista-sugerencias li:hover {
    background: #16a78f;
}

.game-img {
    width: 100%;
    height: 270px;
    object-fit: cover;
    border-radius: 12px;
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


.image-placeholder {
    height: 240px;
    background: linear-gradient(135deg, #680b75, #16a78f);
    border-radius: 12px;
}


.publication-date {
    color: #ffffffb3;
    font-size: 0.9rem;
}

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

.game-card {
    position: relative;
    overflow: hidden;
}

/* capa */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Press Start 2P", system-ui;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(15px);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 4rem;
    color: white;


    border-radius: 12px;

    transition: opacity 0.4s ease;
}

/* cuando se revela */
.overlay.oculto {
    opacity: 0;
    transform: scale(1.1);
    pointer-events: none;


}

.label {
    transition: opacity 0.3s ease;
}

.label.oculto {
    opacity: 0;
}


</style>