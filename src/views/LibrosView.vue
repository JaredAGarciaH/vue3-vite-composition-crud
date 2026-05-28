<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const libros = ref([])

const obtenerLibros = async () => {
  const respuesta = await axios.get('http://localhost:3000/libros')
  libros.value = respuesta.data
}

const eliminarLibro = async (id) => {
  const confirmar = confirm('¿Deseas eliminar este libro?')

  if (confirmar) {
    await axios.delete(`http://localhost:3000/libros/${id}`)
    obtenerLibros()
  }
}

onMounted(() => {
  obtenerLibros()
})
</script>

<template>
  <section>
    <div class="encabezado-vista">
      <h1>Libros</h1>
      <RouterLink class="boton boton-crear" to="/libros/nuevo">Nuevo libro</RouterLink>
    </div>

    <div class="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="libro in libros" :key="libro.id">
            <td>{{ libro.id }}</td>
            <td>{{ libro.titulo }}</td>
            <td>{{ libro.autor }}</td>
            <td>{{ libro.editorial }}</td>
            <td>{{ libro.anio }}</td>
            <td class="acciones">
              <RouterLink class="boton boton-editar" :to="`/libros/editar/${libro.id}`">
                Editar
              </RouterLink>
              <button class="boton boton-eliminar" type="button" @click="eliminarLibro(libro.id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
