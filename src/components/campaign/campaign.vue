<template>
  <div class="container">
    <ccConfirmModal title="Confirm Deletion"
                    contents="Are you sure you want to delete this campaign? This action is irreversible!"
                    bad="Yes, Delete"
                    good="No, Don't Delete"
                    v-if="modal.visible"
                    @chose="deleteCampaign"/>
    <div class="notification">
      <div v-if="checkState('campaign-selector')">
        <ccCampaignList @campaign-creator="setState('campaign-creator')"
                        @campaign-viewer="setState('campaign-viewer')"
                        @delete-campaign="confirmDeleteCampaign"
                        :campaign-directories="refreshDirectories()"/>
      </div>
      <div v-if="checkState('campaign-creator')">
        <ccCampaignCreator @campaign-selector="setState('campaign-selector')"
                           @new-campaign="saveCampaign"
                           :campaign-titles="refreshDirectories()"/>
      </div>
      <div v-if="checkState('campaign-viewer')">
        <ccCampaignViewer @campaign-selector="setState('campaign-selector')"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */

import ccCampaignList from './campaign-components/campaign_list.vue';
import ccCampaignCreator from './campaign-components/campaign_creator.vue';
import ccCampaignViewer from './campaign-components/campaign_viewer.vue';
import ccConfirmModal from '../misc/shared/confirm_modal.vue';

export default {
  name: 'ccCampaign',
  components: {
    ccCampaignList, ccCampaignCreator, ccConfirmModal, ccCampaignViewer,
  },
  data() {
    return {
      currentState: 'campaign-selector',
      currentDirectories: [],
      modal: {
        visible: false,
        returnStatus: '',
      },
    };
  },
  methods: {
    confirmDeleteCampaign(campaignIndex) {
      this.modal.visible = true;
      this.modal.returnStatus = campaignIndex;
    },
    refreshDirectories() {
      const dndDirectory = `${require('os').homedir()}/.dnd`;

      const dirs = this.$fs.readdirSync(dndDirectory);
      const goodDirs = [];
      dirs.forEach((dir) => {
        if (this.$fs.lstatSync(`${dndDirectory}/${dir}`).isDirectory() && dir.length === 68) {
          goodDirs.push(dir);
        }
      });
      this.currentDirectories = goodDirs;
      return goodDirs;
    },
    checkState(passedState) {
      return passedState === this.currentState;
    },
    setState(passedState) {
      this.refreshDirectories();
      this.currentState = passedState;
    },
    saveCampaign(passedCampaign) {
      const campaignDirectory = `${require('os').homedir()}/.dnd/${passedCampaign.id}`;

      this.$fs.mkdirSync(campaignDirectory);

      const campaignInfo = {};
      campaignInfo.name = passedCampaign.name;
      campaignInfo.id = passedCampaign.id;
      const campaignInfoJson = JSON.stringify(campaignInfo);
      this.$fs.writeFileSync(`${campaignDirectory}/campaign.info`, campaignInfoJson);

      this.$fs.mkdirSync(`${campaignDirectory}/characters`);
      passedCampaign.characters.forEach((character) => {
        const characterJson = JSON.stringify(character);
        this.$fs.writeFileSync(`${campaignDirectory}/characters/${character.id}.info`, characterJson);
      });
      this.setState('campaign-selector');
    },
    deleteCampaign(decision) {
      if (decision === 'good') {
        this.modal.visible = false;
        this.modal.returnStatus = '';
        return;
      }
      const campaignDirectory = `${require('os').homedir()}/.dnd/${this.modal.returnStatus}`;
      this.$fs.removeSync(campaignDirectory);
      this.refreshDirectories();
      if (this.modal.returnStatus === this.$store.state.global_information.config.defaultCampaign) {
        this.$store.dispatch({
          type: 'global_information/setDefaultCampaign',
          campaign: '',
        });
        require('../../helpers/helpers').rewriteFileSync(`${require('os').homedir()}/.dnd/config.info`, this.$store.state.global_information.config);
      }
      this.modal.visible = false;
      this.modal.returnStatus = '';
    },
  },
  computed: {
  },
  mounted() {
    this.refreshDirectories();
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
