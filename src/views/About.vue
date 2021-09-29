<template>
  <div class="about">
    <h1>{{ $t('message.about') }}</h1>
    <p>{{ $t('data.about') }}</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {},
  metaInfo: { title: 'About' },
}
</script>

<style lang="scss" scoped>
.about {
  margin: auto;
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>