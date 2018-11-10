<template>
  <div>
    <p class="subtitle is-4">
      Available Campaigns:
    </p>
    <div v-if="this.campaigns.length > 0">
      <table class="table is-bordered is-hoverable is-fullwidth">
        <tbody>
        <tr v-for="(camp, index) in this.campaigns"
            :key="index">
          <th>
            {{ camp }}
          </th>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="subtitle is-6">
        No campaigns found :( Press the button below to make one!
      </p>
    </div>
    <div class="columns">
      <div class="column is-8"></div>
      <div class="column is-4">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-success is-outlined">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>
                Select this Campaign
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-info is-outlined"
               @click="$emit('campaign-creator')">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>
                Create New Campaign
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-restricted-syntax */

export default {
  name: 'ccCampaignList',
  data() {
    return {
      campaigns: this.getCampaigns(),
      selectedCampaign: '',
    };
  },
  methods: {
    getCampaigns() {
      const fs = require('fs');
      const dndDirectory = `${require('os').homedir()}/.dnd`;

      if (!fs.existsSync(dndDirectory)) {
        fs.mkdirSync(dndDirectory);
      }

      const camps = [];
      fs.readdir(dndDirectory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          camps.push(file);
        }
      });
      return camps;
    },
  },
};
</script>

<style scoped>

</style>
