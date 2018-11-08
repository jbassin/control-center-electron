<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "~bulmaswatch/solar/bulmaswatch.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>
