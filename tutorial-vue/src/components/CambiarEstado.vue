<script setup>
import { ref } from "vue";

const contador = ref("Sí");

function incrementar() {
  contador.value = contador.value === "Sí" ? "No" : "Sí";
}
</script>

<template>
  <div>
    <p>Estado Actual: {{ contador }}</p>
    <button @click="incrementar">
      Cambiar a {{ contador === "Sí" ? "No" : "Sí" }}
    </button>
  </div>
</template>
