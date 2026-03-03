<script setup>
import {
    ref,
    watch,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue'

// 🔹 ESTADO
const contador = ref(0)
console.log('Estado inicial creado:', contador.value)

// 🔹 MÉTODO
function incrementar() {
    console.log('Acción: incrementar contador')
    contador.value++
}

// 🔹 OBSERVADOR DEL ESTADO
watch(contador, (nuevoValor, valorAnterior) => {
    console.log(
        `Estado actualizado: contador pasó de ${valorAnterior} a ${nuevoValor}`
    )
})

// 🔹 CICLO DE VIDA
onBeforeMount(() => {
    console.log('Ciclo de vida: onBeforeMount')
})

onMounted(() => {
    console.log('Ciclo de vida: onMounted')
})

onBeforeUpdate(() => {
    console.log('Ciclo de vida: onBeforeUpdate')
})

onUpdated(() => {
    console.log('Ciclo de vida: onUpdated')
})

onBeforeUnmount(() => {
    console.log('Ciclo de vida: onBeforeUnmount')
})

onUnmounted(() => {
    console.log('Ciclo de vida: onUnmounted')
})

defineOptions({
    // nombre del componente
    name: 'contador-ciclo',
});
</script>

<template>
    <div id="contador-ciclo">
        <p>Contador: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>
