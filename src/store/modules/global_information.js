/* eslint-disable no-param-reassign */
const state = {
  activeTab: 'Campaign',
};

const mutations = {
  setActiveTab(store, selectedTab) {
    store.activeTab = selectedTab;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
