<template>
  <div>
    <p class="subtitle is-4">
      Campaign Creator:
    </p>
    <div class="columns">
      <div class="column is-4">
        <div class="field">
          <label class="label">
            Campaign Name:
          </label>
          <div class="control has-icons-left">
            <input class="input"
                   :class="{ 'is-success': nameFree && this.id !== '',
                             'is-danger': !nameFree && this.id !== '' }"
                   type="text"
                   placeholder="The Adventurers"
                   v-model="name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
          </div>
          <p class="help is-success"
             v-if="nameFree && this.id !== ''">
            This name is available
          </p>
          <p class="help is-danger"
             v-if="!nameFree && this.id !== ''">
            This name is already taken
          </p>
        </div>
      </div>
      <div class="column is-8">
        <div class="field">
          <label class="label">
            Campaign Id:
          </label>
          <div class="control">
            <label>
              <input class="input"
                     type="text"
                     :value="this.id"
                     readonly>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="notification is-dark">
      <div v-for="(character, index) in characters"
           :key="index">
        <nav class="level">
          <div class="level-left">
            <span class="icon level-item">
              <i class="far fa-dot-circle"></i>
            </span>
            <span class="level-item subtitle is-5">
              Level {{ character.level }} {{ character.race }} {{ character.class }}: {{ character.name }}
            </span>
          </div>
          <div class="level-right">
            <div class="level-item is-danger">
              <a class="delete"
                 @click="characters.splice(index, 1)"></a>
            </div>
          </div>
        </nav>
      </div>
      <ccCharacterCreator @new-character="characters.push($event)"/>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-success is-outlined"
           @click="campaignDone">
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
</template>

<script>
import ccCharacterCreator from './character_creator.vue';

export default {
  name: 'ccCampaignCreator',
  components: {
    ccCharacterCreator,
  },
  props: {
    campaignTitles: { required: true },
  },
  data() {
    return {
      name: '',
      characters: [],
    };
  },
  methods: {
    campaignDone() {
      if (this.name === '' || this.characters.length === 0) {
        return;
      }
      const campaign = {};
      campaign.name = this.name;
      campaign.id = this.id;
      campaign.characters = this.characters;
      this.$emit('new-campaign', campaign);
    },
  },
  computed: {
    id() {
      if (this.name === '') {
        return '';
      }
      return `cmp-${require('crypto-js/sha256')(this.name).toString()}`;
    },
    nameFree() {
      return !this.campaignTitles.includes(this.id);
    },
  },
};
</script>

<style scoped>

</style>
