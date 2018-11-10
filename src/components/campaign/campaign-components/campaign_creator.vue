<template>
  <div>
    <p class="subtitle is-4">
      Campaign Creator:
    </p>
    <div class="columns">
      <div class="column is-4">
        <div class="field">
          <label class="label">Campaign Name:</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="The Adventurers">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
          </div>
          <p class="help">
            This username is available
          </p>
        </div>
      </div>
      <div class="column is-8">
        <div class="field">
          <label class="label">Campaign Id:</label>
          <div class="control">
            <label>
              <input class="input" type="text" :value="this.id" readonly>
            </label>
          </div>
        </div>
      </div>
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
  data() {
    return {
      id: '',
    };
  },
  methods: {
    updateId(name) {
      return name;
    },
  },
};
</script>

<style scoped>

</style>
