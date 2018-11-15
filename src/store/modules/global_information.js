/* eslint-disable no-param-reassign */
const state = {
  activeTab: 'Campaign',
  config: {
    versionNumber: '0.1.0',
    versionName: 'Aboleth',
    defaultCampaign: '',
  },
};

const mutations = {
  SET_ACTIVE_TAB: (store, payload) => {
    store.activeTab = payload.tab;
  },
  SET_DEFAULT_CAMPAIGN: (store, payload) => {
    store.config.defaultCampaign = payload.campaign;
  },
};

const actions = {
  setActiveTab: (context, payload) => {
    context.commit({
      type: 'SET_ACTIVE_TAB',
      tab: payload.tab,
    });
  },
  setDefaultCampaign: (context, payload) => {
    context.commit({
      type: 'SET_DEFAULT_CAMPAIGN',
      campaign: payload.campaign,
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
