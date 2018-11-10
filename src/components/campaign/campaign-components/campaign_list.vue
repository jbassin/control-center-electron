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
  </div>
</template>

<script>
/* eslint-disable no-restricted-syntax */

export default {
  name: 'ccCampaignList',
  data() {
    return {
      campaigns: this.getCampaigns(),
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
