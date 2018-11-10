<template>
  <div class="container">
    <div class="notification">
      <div v-if="checkState('campaign-selector')">
        <ccCampaignList/>
        <div class="columns is-gapless">
          <div class="column is-8"></div>
          <div class="column is-2">
            <button class="button is-success is-outlined">
              Select this Campaign
            </button>
          </div>
          <div class="column is-2">
            <button class="button is-primary is-outlined"
                    @click="setState('campaign-creator')">
              Create New Campaign
            </button>
          </div>
        </div>
      </div>
      <div v-if="checkState('campaign-creator')">
        <ccCampaignCreator/>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.button {
  margin-top: 20px;
}
</style>
