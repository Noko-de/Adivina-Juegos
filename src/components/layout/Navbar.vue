<template>
    <nav class="glass navbar navbar-expand-lg navbar-floating rounded-5 " data-bs-theme="dark">
        <div class="container-fluid">
            
            <i class="fa-solid fa-gamepad fs-2 text-light ms-4 me-3"></i>
            <router-link class="navbar-brand text-white start2p" to="/">Adivina</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav gothic16">
                    <li class="nav-item">
                        <router-link class="nav-link active text-white" aria-current="page" to="/juegos">Juegos</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">películas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Animes</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>
<style scoped>
.navbar-floating {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    max-width: 1100px;
    z-index: 50;

}


.active{
    text-shadow: 0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
}
</style>
