<template>
    <section class="d-flex  justify-content-center align-items-center">
        <div class="px-3 glass rounded-5 py-5 px-md-5 text-center text-lg-start h-auto  h-75">
            <div class="container">
                <div class="row gx-lg-5 align-items-top">
                    <div class="col-lg-7 mb-5 mb-lg-0 d-flex flex-column">
                        <h1 class="start2p my-5 display-5 fw-bold ls-tight">
                            Adivina el juego 
                            <span class="gothic16 text-cyan mt-4">En 4 imágenes</span>
                        </h1>
                        <p class="gothic16 fs-4 text-light "">
                            Pon a prueba tu conocimiento sobre el mundo de los videojuegos con este divertido desafío. Analiza las 4 imágenes que aparecen en pantalla para descubrir el título que se oculta detrás de ellas. Desde grandes éxitos actuales hasta los clásicos que marcaron época, cada nivel te exigirá observación y memoria para avanzar.
                        </p>
                        <ButtonPurple 
                        class="mt-auto w-50 align-self-center mb-3 fs-3"
                        text="Jugar como invitado!"
                        />
                    </div>
                    <Login />
                    
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import ButtonPurple from './ButtonPurple.vue';
import Login from './layout/Login.vue';

</script>
<style scoped>



</style>
