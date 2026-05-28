<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const titulo = ref('')
const autor = ref('')
const editorial = ref('')
const anio = ref('')
const error = ref('')

const guardarLibro = async () => {
  if (!titulo.value || !autor.value || !editorial.value || !anio.value) {
    error.value = 'Todos los campos son obligatorios.'
    return
  }

  await axios.post('http://localhost:3000/libros', {
    titulo: titulo.value,
    autor: autor.value,
    editorial: editorial.value,
    anio: Number(anio.value),
  })

  router.push('/libros')
}
</script>

<template>
  <section>
    <h1>Nuevo libro</h1>

    <p v-if="error" class="mensaje-error">{{ error }}</p>

    <form class="formulario" @submit.prevent="guardarLibro">
      <div class="campo">
        <label for="titulo">Título</label>
        <input id="titulo" v-model="titulo" type="text" />
      </div>

      <div class="campo">
        <label for="autor">Autor</label>
        <input id="autor" v-model="autor" type="text" />
      </div>

      <div class="campo">
        <label for="editorial">Editorial</label>
        <input id="editorial" v-model="editorial" type="text" />
      </div>

      <div class="campo">
        <label for="anio">Año</label>
        <input id="anio" v-model="anio" type="number" />
      </div>

      <div class="acciones-formulario">
        <button class="boton boton-crear" type="submit">Guardar</button>
        <RouterLink class="boton boton-secundario" to="/libros">Volver al listado</RouterLink>
      </div>
    </form>
  </section>
</template>
