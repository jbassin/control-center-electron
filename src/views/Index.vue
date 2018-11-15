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
      config.versionNumber = this.$store.state.global_information.config.versionNumber;
      config.versionName = this.$store.state.global_information.config.versionName;
      config.defaultCampaign = this.$store.state.global_information.config.defaultCampaign;
      this.$fs.writeFileSync(`${dndDirectory}/config.info`, JSON.stringify(config));
    } else {
      const config = JSON.parse(this.$fs.readFileSync(`${dndDirectory}/config.info`, 'utf-8'));
      if (config.defaultCampaign !== '') {
        this.$store.dispatch({
          type: 'global_information/setDefaultCampaign',
          campaign: config.defaultCampaign,
        });
      }
    }
  },
};
</script>

<style scoped>

</style>
