<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas :personas="personas" @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona" />
      </div>
    </div>
  </div>
  <div>
    <p>Count is {{ store.count }}</p>
  </div>
</template>
<script setup>
import TablaPersonas from "@/components/TablaPersonas.vue";
// NUEVO:
import FormularioPersona from "@/components/FormularioPersona.vue";
import { ref, onMounted } from "vue";
defineOptions({
  name: "app",
});
const personas = ref([]);
const listadoPersonas = async () => {
  // Metodo para obtener un listado de personas
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/personas/"
    );
    personas.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

import { useCounterStore } from "../stores/counter";

const store = useCounterStore()

const agregarPersona = async (persona) => {
  // Metodo para agregar una persona
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/personas/",
      {
        method: "POST",
        body: JSON.stringify(persona),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    const personaCreada = await response.json();
    const personaConIdUnico = {
      ...personaCreada,
      id: personas.value.length > 0
        ? Math.max(...personas.value.map(p => p.id)) + 1
        : Date.now()
    };
    personas.value = [...personas.value, personaConIdUnico];
  } catch (error) {
    console.error(error);
  }
};
const eliminarPersona = async (persona_id) => {
  // Metodo para eliminar una persona
  try {
    await fetch(
      "http://127.0.0.1:8000/api/v1/personas/" +
      persona_id +
      "/",
      {
        method: "DELETE",
      }
    );
    personas.value = personas.value.filter((u) => u.id !== persona_id);
  } catch (error) {
    console.error(error);
  }
};
const actualizarPersona = async (id, personaActualizada) => {
  // Metodo para actualizar una persona
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/personas/" +
      personaActualizada.id +
      "/",
      {
        method: "PUT",
        body: JSON.stringify(personaActualizada),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    const personaActualizadaJS = await response.json();
    personas.value = personas.value.map((u) =>
      u.id === personaActualizada.id ? personaActualizadaJS : u
    );
  } catch (error) {
    console.error(error);
  }
};
// Fetch data when the component is mounted
onMounted(() => {
  listadoPersonas();
});
// Metodo para agregar una persona
</script>

<style>
/* Estilos globales para todos los elementos button en la aplicacion */
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>
