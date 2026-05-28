<template>
  <header class="site-header">
    <nav class="nav">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/libros">Libros</RouterLink>
      <RouterLink to="/libros/nuevo">Nuevo libro</RouterLink>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>
