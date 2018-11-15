<template>
  <div v-if="this.$_.isEmpty(this.campaign)"
       class="has-text-centered">
    <p class="title is-4">
      How did you get here?
    </p>
    <br>
    <p class="">
      It doesn't seem like you've selected a campaign to view, so the fact that you're here is problematic. <br>
      Press the button below to return to the campaign selection screen, and hope that you don't come here again.
    </p>
    <br>
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-warning is-outlined"
           @click="selector">
          <span class="icon is-small">
            <i class="fas fa-undo-alt"></i>
          </span>
          <span>
            Go back to Selector
          </span>
        </a>
      </p>
    </div>
  </div>
  <div v-else>
    <p class="subtitle is-4">
      Current Campaign: {{ this.campaign.name }}
    </p>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-warning is-outlined"
           @click="selector">
          <span class="icon is-small">
            <i class="fas fa-undo-alt"></i>
          </span>
          <span>
            Go back to Selector
          </span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccCampaignViewer',
  methods: {
    selector() {
      this.$store.dispatch({
        type: 'global_information/setDefaultCampaign',
        campaign: '',
      });
      this.$emit('campaign-selector');
    },
  },
  computed: {
    campaign() {
      return this.$store.state.campaign_information.campaign;
    },
    characters() {
      return this.$store.state.character_information.characters;
    },
  },
};
</script>

<style scoped>

</style>
