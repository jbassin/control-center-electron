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
  created() {
    const dndDirectory = `${require('os').homedir()}/.dnd`;
    if (!this.$fs.existsSync(dndDirectory)) {
      this.$fs.mkdirSync(dndDirectory);

      const config = {};
      config.versionNumber = this.$store.state.global_information.versionNumber;
      config.versionName = this.$store.state.global_information.versionName;
      config.defaultCampaign = this.$store.state.global_information.defaultCampaign;
      this.$fs.writeFileSync(`${dndDirectory}/config.info`, JSON.stringify(config));
    }
  },
};
</script>

<style scoped>

</style>
