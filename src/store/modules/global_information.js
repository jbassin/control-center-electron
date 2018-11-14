/* eslint-disable no-param-reassign */
const state = {
  activeTab: 'Campaign',
};

const mutations = {
  SET_ACTIVE_TAB: (store, payload) => {
    store.activeTab = payload.tab;
  },
};

const actions = {
  setActiveTab: (context, payload) => {
    context.commit({
      type: 'SET_ACTIVE_TAB',
      tab: payload.tab,
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
