<template>
  <div class="login">
    <h2>{{ $t('message.login') }}</h2>
    <form class="login-form">
      <InputForm v-model="user.name" label="name"></InputForm>
      <InputForm v-model="user.email" label="email"></InputForm>
      <InputForm
        v-model="user.password"
        label="password"
        type="password"
      ></InputForm>
      <button @click.prevent="login" class="btn green">
        {{ $t('message.login') }}
      </button>
    </form>
  </div>
</template>

<script>
import InputForm from '@/components/form/InputForm'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: { InputForm },
  data() {
    return {
      user: { name: '', password: '', email: '' },
    }
  },
  watch: {
    user: {
      deep: true,
      handler: (value) => {
        Object.entries(value).forEach(([key, value]) => {
          let el = document.getElementById(key)
          if (el) {
            if (value) {
              el.classList.remove('error')
              el.classList.add('success')
            }
          }
        })
      },
    },
  },
  methods: {
    ...mapActions(['setUser', 'setLocale']),
    login() {
      Object.entries(this.user).forEach(([key, value]) => {
        let el = document.getElementById(key)
        if (el) {
          if (!value) {
            el.classList.add('error')
          } else {
            el.classList.remove('error')
          }
        }
      })

      if (this.isValid()) {
        this.setUser(this.user)
        this.$emit('close')
      }
    },
    isValid() {
      let isError = Object.entries(this.user)
        .map(([key, value]) => {
          let el = document.getElementById(key)
          if (el && el.className.includes('error')) {
            return false
          }
          return true
        })
        .find((value) => value == false)

      return isError == false ? false : true
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  h2 {
    text-align: center;
  }
  .login-form {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
}
</style>