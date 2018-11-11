<template>
  <div>
    <label class="label is-large">
      Characters:
    </label>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="control">
            <label class="label is-small">
              Character Name:
            </label>
            <input class="input"
                   :class="{ 'is-danger': !this.characterNameValid }"
                   type="text"
                   placeholder="Drizzt Do'Urden"
                   v-model="characterName">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="control">
            <label class="label is-small">
              Character Race:
            </label>
            <input class="input"
                   :class="{ 'is-danger': !this.characterRaceValid }"
                   type="text"
                   placeholder="Drow Elf"
                   v-model="characterRace">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="control">
            <label class="label is-small">
              Character Class/Level:
            </label>
            <div class="columns is-variable is-1">
              <div class="column is-3">
                <input class="input"
                       :class="{ 'is-danger': !this.characterLevelValid }"
                       type="number"
                       placeholder="0"
                       v-model="characterLevel"
                       min="1"
                       max="30"/>
              </div>
              <div class="column">
                <input class="input"
                       :class="{ 'is-danger': !this.characterClassValid }"
                       type="text"
                       placeholder="Fighter"
                       v-model="characterClass"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <table class="table is-fullwidth is-narrow">
          <thead>
            <th class="has-text-centered">
              Currency Name
            </th>
            <th class="has-text-centered">
              Currency Quantity
            </th>
          </thead>
          <tbody>
            <tr>
              <td class="has-text-centered">
                Copper Pieces
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterMoney.cp"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Silver Pieces
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterMoney.sp"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Electrum Pieces
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterMoney.ep"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Gold Pieces
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterMoney.gp"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Platinum Pieces
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterMoney.pp"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column is-half">
        <table class="table is-fullwidth is-narrow">
          <thead>
          <th class="has-text-centered">
            Stat Name
          </th>
          <th class="has-text-centered">
            Stat Quantity
          </th>
          </thead>
          <tbody>
            <tr>
              <td class="has-text-centered">
                Strength
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.str }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.str"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Dexterity
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.dex }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.dex"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Constitution
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.con }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.con"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Intelligence
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.int }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.int"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Wisdom
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.wis }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.wis"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="has-text-centered">
                Charisma
              </td>
              <td class="has-text-centered">
                <div class="columns">
                  <div class="column is-one-third"></div>
                  <div class="column">
                    <input class="input
                                  has-background-grey-dark
                                  has-text-light
                                  is-dark
                                  has-text-centered"
                           :class="{ 'is-danger': !characterStatsValid.cha }"
                           type="number"
                           min="0"
                           placeholder="0"
                           v-model="characterStats.cha"/>
                  </div>
                  <div class="column is-one-third"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-success is-outlined"
           @click="characterDone">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
          <span>
          Confirm
        </span>
        </a>
      </p>
      <p class="control">
        <a class="button is-danger is-outlined"
           @click="$emit('campaign-selector')">
          <span class="icon is-small">
            <i class="fas fa-ban"></i>
          </span>
          <span>
            Remove
          </span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccPlayerCreator',
  data() {
    return {
      characterName: '',
      characterNameValid: true,
      characterRace: '',
      characterRaceValid: true,
      characterLevel: '0',
      characterLevelValid: true,
      characterClass: '',
      characterClassValid: true,
      characterMoney: {
        cp: '0',
        sp: '0',
        ep: '0',
        gp: '0',
        pp: '0',
      },
      characterStats: {
        str: '10',
        dex: '10',
        con: '10',
        int: '10',
        wis: '10',
        cha: '10',
      },
      characterStatsValid: {
        str: true,
        dex: true,
        con: true,
        int: true,
        wis: true,
        cha: true,
      },
      characterStatsAllValid: true,
    };
  },
  methods: {
    characterDone() {
      this.characterNameValid = this.characterName !== '';
      this.characterRaceValid = this.characterRace !== '';
      this.characterLevelValid = this.characterLevel !== '0';
      this.characterClassValid = this.characterClass !== '';
      this.characterStatsAllValid = true;
      for (const [key, value] of Object.entries(this.characterStats)) {
        if (value === '0') {
          this.characterStatsValid[key] = false;
          this.characterStatsAllValid = false;
        } else {
          this.characterStatsValid[key] = true;
        }
      }
      if (!(this.characterNameValid
            && this.characterRaceValid
            && this.characterLevelValid
            && this.characterClassValid
            && this.characterStatsAllValid)) {
        return;
      }
      let character;
      character.name = this.characterName;
      character.race = this.characterRace;
      character.class = this.characterClass;
      character.level = this.characterLevel;
      character.money = this.characterMoney;
      character.stats = this.characterStats;
      this.$emit('new-character', character);
    },
  },
};
</script>

<style scoped>
  .table {
    background-color: #282f2f;
  }
</style>
