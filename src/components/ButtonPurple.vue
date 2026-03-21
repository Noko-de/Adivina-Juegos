    <template>
        <button class="gothic16 rounded-4 btn btn-dark  color-purple">
            {{text}}
        </button>
    </template>

    <script setup>
    const props = defineProps({
        text: {
            type: String,
            default: 'Botón'
        }
    })
    </script>
    <style scoped>

    .color-purple {
        background-color: #680b75;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .color-purple:hover {
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0px 8px 25px #16a78f99;
    }
    </style>
