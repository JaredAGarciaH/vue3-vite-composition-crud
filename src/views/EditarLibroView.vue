<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const titulo = ref('')
const autor = ref('')
const editorial = ref('')
const anio = ref('')
const error = ref('')

const obtenerLibro = async () => {
  const id = route.params.id
  const respuesta = await axios.get(`http://localhost:3000/libros/${id}`)

  titulo.value = respuesta.data.titulo
  autor.value = respuesta.data.autor
  editorial.value = respuesta.data.editorial
  anio.value = respuesta.data.anio
}

const actualizarLibro = async () => {
  if (!titulo.value || !autor.value || !editorial.value || !anio.value) {
    error.value = 'Todos los campos son obligatorios.'
    return
  }

  const id = route.params.id

  await axios.put(`http://localhost:3000/libros/${id}`, {
    titulo: titulo.value,
    autor: autor.value,
    editorial: editorial.value,
    anio: Number(anio.value),
  })

  router.push('/libros')
}

onMounted(() => {
  obtenerLibro()
})
</script>

<template>
  <section>
    <h1>Editar libro</h1>

    <p v-if="error" class="mensaje-error">{{ error }}</p>

    <form @submit.prevent="actualizarLibro">
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
        <button type="submit">Actualizar</button>
        <RouterLink to="/libros">Volver al listado</RouterLink>
      </div>
    </form>
  </section>
</template>
