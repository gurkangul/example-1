<template>
  <div class="dropdown">
    <v-select
      :searchable="false"
      :clearable="false"
      v-model="selectValue"
      :options="Languages"
      label="name"
    ></v-select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DropdownCountry',
  props: {
    value: { type: Object, default: () => {} },
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
  data() {
    return {
      Languages: [
        {
          name: 'Turkish',
          code: 'tr',
        },
        {
          name: 'English',
          code: 'en',
        },
      ],
    }
  },
  methods: {
    ...mapActions(['setLocale']),
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  width: 110px;
}
</style>