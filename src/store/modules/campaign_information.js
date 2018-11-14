/* eslint-disable no-param-reassign */
const state = {
  campaign: {},
};

const mutations = {
  MUTATE_CAMPAIGN: (store, payload) => {
    store.campaign = payload.campaign;
  },
};

const actions = {
  setCampaign: (context, payload) => {
    context.commit({
      type: 'MUTATE_CAMPAIGN',
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
