<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head"
              v-if="this.title">
        <p class="modal-card-title">{{ this.title }}</p>
      </header>
      <section class="modal-card-body">
        {{ this.contents }}
      </section>
      <footer class="modal-card-foot">
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <a class="button is-danger is-outlined"
               @click="$emit('chose', 'bad')">{{ this.bad }}</a>
          </p>
          <p class="control">
            <a class="button is-success is-outlined"
               @click="$emit('chose', 'good')">{{ this.good }}</a>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccConfirmModal',
  props: {
    title: { required: false },
    contents: { required: true },
    good: { required: true },
    bad: { required: true },
  },
};
</script>

<style scoped>
  .modal-card-foot {
    justify-content: flex-end;
  }
</style>
