<template>
  <div>
    <p class="subtitle is-4">
      Available Campaigns:
    </p>
    <div v-if="this.campaignTitles.length > 0">
      <table class="table is-bordered is-hoverable is-fullwidth">
        <tbody>
        <tr v-for="(camp, index) in this.campaignTitles"
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
    <div class="field is-grouped is-grouped-right end-buttons">
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
</template>

<script>
/* eslint-disable no-restricted-syntax */

export default {
  name: 'ccCampaignList',
  props: {
    campaignTitles: { required: true },
  },
  data() {
    return {
      selectedCampaign: '',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  .end-buttons {
    margin-top: 15px;
  }
</style>
