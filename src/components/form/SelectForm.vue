<template>
  <div class="form-group">
    <label :for="label"> {{ $t(`message.${label}`) }}</label>
    <v-select
      :searchable="true"
      :clearable="false"
      v-model="selectValue"
      :options="options"
      label="name"
      :id="label"
      class="custom-style"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, default: () => null },
    label: { type: String, default: '' },
    options: { type: Array, default: () => [] },
  },
  computed: {
    selectValue: {
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
}
</style>