<template>
    <section class="d-flex  justify-content-center align-items-center page-content">
        <div class=" mt-5 px-3 glass rounded-5 py-4 px-md-5 text-center text-lg-start w-75  ">
            <div class="container">
                <div class="d-flex justify-content-center mb-5">
            <input 
                type="text" 
                class="form-control fs-4 search-bar w-50 text-center"
                placeholder="Buscar juego..."
            >
        </div>

        <!-- Grid de imágenes -->
        <div class="row g-3 d-flex align-items-center justify-content-center mb-4">
            <div class="col-md-5" v-for="n in 4" :key="n">
                <div class="game-card p-3">
                    <div class="image-placeholder"></div>
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

<script setup></script>


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
</style>