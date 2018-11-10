<template>
  <div>
    <div class="field has-addons">
      <p class="control">
        <a class="button is-static">
          Campaign Name:
        </a>
      </p>
      <p class="control">
        <input class="input" type="text" placeholder="The Adventurers">
      </p>
    </div>
    <div class="columns">
      <div class="column is-8"></div>
      <div class="column is-4">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-success is-outlined">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>
                Create Campaign
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-warning is-outlined"
               @click="$emit('campaign-selector')">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccCampaignCreator',
};
</script>

<style scoped>

</style>
