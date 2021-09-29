<template>
  <div class="form-group">
    <label :for="label"> {{ $t(`message.${label}`) }}</label>
    <textarea v-model="inputValue" :id="label" />
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: '' },
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
  textarea {
    border: 1px solid rgba(31, 31, 31, 0.3);
    border-radius: 3px;
    height: 5rem;
    &:focus {
      outline: none;
    }
  }
}
</style>