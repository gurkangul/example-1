<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer },
}
</script>

<style lang="scss">
#app {
  height: 100%;
  display: grid;
  grid-template-rows: 45px 1fr 3rem;
}
</style>
