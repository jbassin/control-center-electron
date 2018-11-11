<template>
  <div class="container">
    <div class="notification">
      <div v-if="checkState('campaign-selector')">
        <ccCampaignList @campaign-creator="setState('campaign-creator')"
                        :campaign-titles="refreshDirectories()"/>
      </div>
      <div v-if="checkState('campaign-creator')">
        <ccCampaignCreator @campaign-selector="setState('campaign-selector')"
                           @new-campaign="saveCampaign"
                           :campaign-titles="refreshDirectories()"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */

import ccCampaignList from './campaign-components/campaign_list.vue';
import ccCampaignCreator from './campaign-components/campaign_creator.vue';

export default {
  name: 'ccCampaign',
  components: {
    ccCampaignList, ccCampaignCreator,
  },
  data() {
    return {
      currentState: 'campaign-selector',
      currentDirectories: [],
    };
  },
  methods: {
    refreshDirectories() {
      const fs = require('fs');
      const dndDirectory = `${require('os').homedir()}/.dnd`;

      !fs.existsSync(dndDirectory) && fs.mkdirSync(dndDirectory);

      const dirs = [];
      fs.readdir(dndDirectory, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
          if (fs.lstatSync(`${dndDirectory}/${file}`).isDirectory() && file.length === 68) {
            dirs.push(file);
          }
        });
      });
      this.currentDirectories = dirs;
      return dirs;
    },
    checkState(passedState) {
      return passedState === this.currentState;
    },
    setState(passedState) {
      this.refreshDirectories();
      this.currentState = passedState;
    },
    saveCampaign(passedCampaign) {
      const fs = require('fs');
      const campaignDirectory = `${require('os').homedir()}/.dnd/${passedCampaign.id}`;

      fs.mkdirSync(campaignDirectory);

      const campaignInfo = {};
      campaignInfo.name = passedCampaign.name;
      campaignInfo.id = passedCampaign.id;
      const campaignInfoJson = JSON.stringify(campaignInfo);
      fs.writeFileSync(`${campaignDirectory}/campaign.info`, campaignInfoJson);

      fs.mkdirSync(`${campaignDirectory}/characters`);
      passedCampaign.characters.forEach((character) => {
        const characterJson = JSON.stringify(character);
        fs.writeFileSync(`${campaignDirectory}/characters/${character.id}.info`, characterJson);
      });
      this.setState('campaign-selector');
    },
  },
  computed: {
  },
  mounted() {
    this.refreshDirectories();
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
