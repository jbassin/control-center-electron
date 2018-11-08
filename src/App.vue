<template>
  <div id="app">
    <ccHeader/>
    <router-view/>
  </div>
</template>

<script>
import ccHeader from './components/misc/header/header.vue';

export default {
  name: 'app',
  components: { ccHeader },
};
</script>

<style>
@import "~bulmaswatch/solar/bulmaswatch.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>
