
<template>
    <!-- Contenedor principal del componente -->
    <div id="lista-compra">
        <!-- Tabla para mostrar informacion de personas -->
        <ol class="table">
            <li>Pan - 0.5€</li>
            <li>Leche - 1.5€</li>
            <li>Huevos - 3.5€</li>
        </ol>
    </div>
</template>
<script setup>
// Definicion del componente Vue
defineOptions({
    // Nombre del componente
    name: 'lista-compra',
});
</script>
<style scoped>
/* Estilos especificos del componente con el modificador "scoped" */
</style>