<template>
  <li :class="{ 'is-active': isActive }"
      @click="setActiveTab">
    <a>{{ this.title }}</a>
  </li>
</template>

<script>
export default {
  name: 'ccTab',
  props: {
    title: { required: true },
  },
  computed: {
    isActive() {
      return this.$store.state.global_information.activeTab === this.title;
    },
  },
  methods: {
    setActiveTab() {
      this.$store.dispatch({
        type: 'global_information/setActiveTab',
        tab: this.title,
      });
    },
  },
};
</script>

<style scoped>

</style>
