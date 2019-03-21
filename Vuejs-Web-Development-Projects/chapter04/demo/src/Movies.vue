<template>
  <ul class="movies">
    <li v-for="movie of movies" class="movie">
      {{ movie.title }}
    </li>
  </ul>
</template>

<script>
import Movie from './Movie.vue'

export default {
  components: {
    Movie,
  },

  data() {
    return {
      movies: [
        {id: 0, title: 'Star Wars'},
        {id: 1, title: 'Blade Runner'},
      ],
    }
  },
}
</script>

