<template>
  <div class="sub-footer">
    <p class="copyright has-text-weight-bold has-text-grey">
      &copy; {{ year }} Gurkan Gul
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
}

<style lang="scss" scoped>
.sub-footer {
  background-color: $footer;
  padding: 1rem;
  height: 1rem;
  text-align: right;
}
</style>