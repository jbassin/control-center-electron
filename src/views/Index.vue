<template>
  <ccCampaign v-if="isActive === 'Campaign'"/>
</template>

<script>
import ccCampaign from '../components/campaign/campaign.vue';

export default {
  name: 'index',
  components: {
    ccCampaign,
  },
  computed: {
    isActive() {
      return this.$store.state.global_information.activeTab;
    },
  },
};
</script>

<style scoped>

</style>
