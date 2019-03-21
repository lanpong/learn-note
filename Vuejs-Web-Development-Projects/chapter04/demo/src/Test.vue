<template lang="pug">
ul.movies
  li.movie Star Wars
  li.movie Blade Runner
</template>

<script>
export default {
  data () {
    return {
      movies: [
        {title: 'Star Wars'},
        {title: 'Blade Runner'},
      ],
    }
  },

  render (h) {
    const itemClass = 'movie'
    return <ul class="moives">
      {this.movies.map(movies =>
        <li class={ itemClass }>{ movie.title }</li>
        )}
        </ul>
  },
}
</script>

<style>
.movies {
  list-style: none;
  padding: 12px;
  background: rgba(0, 0, 0, .1);
  border-radius: 3px;
}
</style>

<style scoped>
.movie::not(::last-child) {
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: solid 1px rgba(0, 0 ,0 .1);
}
</style>


