<template>
  <div class="container">
    <div class="notification">
      <div v-if="checkState('campaign-selector')">
        <ccCampaignList @campaign-creator="setState('campaign-creator')"/>
      </div>
      <div v-if="checkState('campaign-creator')">
        <ccCampaignCreator @campaign-selector="setState('campaign-selector')"/>
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
