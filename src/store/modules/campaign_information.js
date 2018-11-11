/* eslint-disable no-param-reassign */
const state = {
  campaign: [],
};

const mutations = {
  setCampaign(store, campaign) {
    store.campaign = campaign;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
