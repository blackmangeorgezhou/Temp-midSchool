<template>
  <div id="app">
    <the-loading v-if="isLoading"></the-loading>
    <router-view/>
  </div>
</template>

<script>
import TheLoading from '@/components/Loading'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    TheLoading
  },

  computed: {
    ...mapState(['isLoading'])
  }
}
</script>

<style>
@import "./assets/css/index.css";
@import "./assets/css/animate.min.css";

#app {
  font-family: 'Sim Hei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 500px
}
</style>
