/* eslint-disable no-param-reassign,no-console,guard-for-in */
// import Vue from 'vue';

const state = {
  characters: [],
};

const mutations = {
  SET_CHARACTERS: (store, payload) => {
    store.characters = payload.characters;
  },
};

const actions = {
  setCharacters: (context, payload) => {
    context.commit({
      type: 'SET_CHARACTERS',
      characters: payload.characters,
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
