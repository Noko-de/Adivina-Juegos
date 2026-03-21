<template>
    <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="card">
            <div class="card-body py-5 px-md-5">
                <form class=" d-flex flex-column">

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div data-mdb-input-init class="form-outline">
                                <label class="form-label" for="form3Example1">Nombre</label>
                                <input type="text" id="form3Example1" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div data-mdb-input-init class="form-outline">
                                <label class="form-label" for="form3Example2">Apellido</label>
                                <input type="text" id="form3Example2" class="form-control" />
                            </div>
                        </div>
                    </div>

                    <!-- Email input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example3">Email</label>
                        <input type="email" id="form3Example3" class="form-control" />
                    </div>

                    <!-- Password input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example4">Contraseña</label>
                        <input type="password" id="form3Example4" class="form-control" />
                    </div>

                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label text-light" for="form2Example33">
                            Suscribete a nuestro newsletter
                        </label>
                    </div>

                    <!-- Submit button -->
                    <ButtonPurple 
                    class=" px-4 align-self-center m-1"
                    text='Registrate'
                    />

                    <!-- Register buttons -->
                    <div class="text-center mt-3">
                        <p class="text-light">o registrate con:</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-twitter fs"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init
                            class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonPurple from '../ButtonPurple.vue';


</script>
<style scoped>
.card {
    background: rgba(27, 27, 27, 0.4);
    border-radius: 16px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

/* Inputs */
.form-control {
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: all 0.3s ease;
}

.form-control:focus {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: #16a78f;
    box-shadow: 0 0 10px rgba(22, 167, 143, 0.5);
    color: #fff;
}

/* Labels */
.form-label {
    color: rgba(255, 255, 255, 0.7);
}

/* Checkbox */
.form-check-input {
    background-color: #1b1b1b;
    border: 1px solid #16a78f;
}

.form-check-input:checked {
    background-color: #16a78f;
    border-color: #16a78f;
}



/* Botones sociales */
.btn-link {
    color: #16a78f;
    transition: transform 0.2s ease;
}

.btn-link:hover {
    transform: scale(1.2);
    color: #fff;
}
</style>
