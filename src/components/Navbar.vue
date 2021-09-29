<template>
  <div class="nav">
    <div class="left">
      <span>
        <Abacus></Abacus>
      </span>
      <div>{{ title }}</div>
    </div>
    <div class="right">
      <router-link v-if="getUser" to="/">{{
        $t('message.homePage')
      }}</router-link>
      <router-link v-if="getUser" to="/about">{{
        $t('message.aboutPage')
      }}</router-link>
      <router-link v-if="getUser" to="/contact">{{
        $t('message.contactPage')
      }}</router-link>
      <DropdownCountry v-model="selected"></DropdownCountry>
      <button v-if="!getUser" @click="modalActive = true" class="btn primary">
        {{ $t('message.login') }}
      </button>
      <div v-if="getUser">
        <Popover
          @handleClick="handleClick"
          :items="[{ name: $t('message.logout'), type: 'logout' }]"
          :title="getUser.email"
        >
          {{ getUser.name }}
        </Popover>
      </div>
    </div>
    <div class="m-right">
      <span>
        <div>
          <DropdownCountry v-model="selected"></DropdownCountry>
        </div>
        <span @click="menuActive = !menuActive">
          <Menu></Menu>
        </span>
      </span>
      <div v-if="menuActive" class="m-menu">
        <router-link v-if="getUser" to="/">{{
          $t('message.homePage')
        }}</router-link>
        <router-link v-if="getUser" to="/about">{{
          $t('message.aboutPage')
        }}</router-link>
        <router-link v-if="getUser" to="/contact">{{
          $t('message.contactPage')
        }}</router-link>
        <button
          v-if="!getUser"
          @click="modalActive = true"
          class="btn primary w-30"
        >
          {{ $t('message.login') }}
        </button>
        <div v-if="getUser" class="col">
          <p>{{ getUser.name }}</p>
          <p>{{ getUser.email }}</p>
          <button @click="handleClick">{{ $t('message.logout') }}</button>
        </div>
      </div>
    </div>
    <Modal @close="modalActive = false" :active="modalActive">
      <Login @close="modalActive = false"></Login>
    </Modal>
  </div>
</template>

<script>
import Abacus from 'vue-material-design-icons/Abacus.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import DropdownCountry from '@/components/DropdownCountry'
import Modal from '@/components/Modal'
import Login from '@/components/Login'
import Popover from '@/components/Popover'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Abacus,
    DropdownCountry,
    Modal,
    Login,
    Popover,
    Menu,
  },
  watch: {
    getLocale(value) {
      this.$i18n.locale = value?.code || 'en'
      this.selected = value
    },
    selected(value) {
      this.setLocale(value)
    },
  },
  computed: {
    ...mapGetters(['getLocale', 'getUser']),
    title() {
      return this.$t('message.' + this.$route.meta.name)
    },
  },
  data() {
    return {
      selected: {
        name: 'English',
        code: 'en',
      },
      modalActive: false,
      menuActive: false,
    }
  },
  methods: {
    ...mapActions(['setLocale', 'setUser']),
    handleClick() {
      this.setUser(null)
      if (this.$route?.path != '/') {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 10px;
  height: 25px;
  background: $nav-bg;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    flex-direction: row;
    column-gap: 0.9rem;
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.9rem;

    a {
      color: $text-black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .m-right {
    display: none;
  }

  @include media('screen', '<minWidth') {
    .left span {
      display: none;
    }
    .right {
      display: none;
    }
    .m-right {
      display: block;
      user-select: none;
      span {
        display: flex;
        flex-direction: row;
        column-gap: 0.9rem;
      }
      .m-menu {
        padding: 10px 20px;
        width: calc(100% - 40px);
        background-color: $footer;
        position: absolute;
        z-index: 9;
        left: 0;
        top: 45px;

        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;

        .col {
          display: flex;
          flex-direction: column;
          row-gap: 0.5rem;
        }
        p {
          color: $text-03;
        }
        a {
          color: $text-black;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
        button {
          border: 1px solid $nav-bg;
          background-color: $primary;
          width: 20%;
          color: $text-color;
          padding: 0.2rem;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>