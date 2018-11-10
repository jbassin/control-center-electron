<template>
  <div class="container">
    <div class="notification">
      <div v-if="checkState('campaign-selector')">
        <ccCampaignList @campaign-creator="setState('campaign-creator')"
                        :campaign-titles="directories"/>
      </div>
      <div v-if="checkState('campaign-creator')">
        <ccCampaignCreator @campaign-selector="setState('campaign-selector')"
                           :campaign-titles="directories"/>
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
    };
  },
  methods: {
    checkState(passedState) {
      return passedState === this.currentState;
    },
    setState(passedState) {
      this.currentState = passedState;
    },
  },
  computed: {
    directories() {
      const fs = require('fs');
      const dndDirectory = `${require('os').homedir()}/.dnd`;

      !fs.existsSync(dndDirectory) && fs.mkdirSync(dndDirectory);

      const camps = [];
      fs.readdir(dndDirectory, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
          if (fs.lstatSync(`${dndDirectory}/${file}`).isDirectory()) {
            camps.push(file);
          }
        });
      });
      return camps;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
