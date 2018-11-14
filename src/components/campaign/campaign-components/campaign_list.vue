<template>
  <div>
    <p class="subtitle is-4">
      Available Campaigns:
    </p>
    <div v-if="this.campaigns.length > 0">
      <table class="table  is-hoverable is-fullwidth">
        <thead>
          <th>
            Campaign Name
          </th>
          <th>
            Campaign ID
          </th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(campaign, index) in this.campaigns"
              :key="index"
              :class="{ 'is-selected': campaign.name === selectedCampaign.name }"
              @click="selectedCampaign =  campaign">
            <td>
              {{ campaign.name }}
            </td>
            <td>
              {{ campaign.id }}
            </td>
            <td class="has-text-centered">
              <a class="delete"
                 @click="$emit('delete-campaign', campaign.id)"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="subtitle is-6">
        No campaigns found :( Press the button below to make one!
      </p>
    </div>
    <div class="field is-grouped is-grouped-right end-buttons">
      <p class="control">
        <a class="button is-success is-outlined"
           @click="selectCampaign">
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
</template>

<script>
/* eslint-disable no-restricted-syntax */

export default {
  name: 'ccCampaignList',
  props: {
    campaignDirectories: { required: true },
  },
  data() {
    return {
      selectedCampaign: '',
    };
  },
  methods: {
    selectCampaign() {
      if (this.selectedCampaign !== '') {
        const fs = require('fs-extra');
        const characterDirectory = `${require('os').homedir()}/.dnd/${this.selectedCampaign.id}/characters`;
        fs.readdir(characterDirectory, (err, files) => {
          const characterList = [];
          if (err) throw err;
          files.forEach((file) => {
            if (file.length === 73) {
              characterList.push(JSON.parse(fs.readFileSync(`${characterDirectory}/${file}`, 'utf-8')));
            }
          });
          this.$store.dispatch({
            type: 'campaign_information/setCampaign',
            campaign: this.selectedCampaign,
          });
          this.$store.dispatch({
            type: 'character_information/setCharacters',
            characters: characterList,
          });
        });
      }
    },
  },
  computed: {
    campaigns() {
      const fs = require('fs-extra');
      const dndDirectory = `${require('os').homedir()}/.dnd`;

      const campaigns = [];
      this.campaignDirectories.forEach((dir) => {
        campaigns.push(JSON.parse(fs.readFileSync(`${dndDirectory}/${dir}/campaign.info`, 'utf-8')));
      });
      return campaigns;
    },
  },
};
</script>

<style scoped>
  .end-buttons {
    margin-top: 15px;
  }
</style>
