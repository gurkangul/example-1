<template>
  <div class="form-group">
    <label :for="label"> {{ $t(`message.${label}`) }}</label>
    <input :type="type" v-model="inputValue" :id="label" />
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
  input {
    border: 1px solid rgba(31, 31, 31, 0.3);
    border-radius: 3px;
    height: 1.3rem;
    &:focus {
      outline: none;
    }
  }
}

.error {
  border: 1px solid red !important;
}
</style>