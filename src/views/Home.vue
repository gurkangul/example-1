<template>
  <div class="home">
    <h2>{{ $t('message.hello') }}</h2>
    <p>
      {{ $t('data.home') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  metaInfo: { title: 'Home' },
}
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
