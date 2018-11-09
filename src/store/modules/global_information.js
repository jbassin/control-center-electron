/* eslint-disable no-param-reassign */
const state = {
  activeTab: 'Modifiers',
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
