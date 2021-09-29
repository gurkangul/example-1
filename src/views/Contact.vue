<template>
  <div class="contact">
    <h1>{{ $t('message.contact') }}</h1>
    <form>
      <InputForm v-model="contact.name" label="name"></InputForm>
      <InputForm v-model="contact.phonenumber" label="phonenumber"></InputForm>
      <InputForm v-model="contact.email" label="email"></InputForm>
      <SelectForm
        v-model="contact.country_code"
        label="country_code"
        :options="options"
      ></SelectForm>
      <TextareaForm v-model="contact.text" label="text"></TextareaForm>
      <button @click.prevent="send" class="btn green send-button">
        {{ $t('message.send') }}
      </button>
    </form>
  </div>
</template>
<script>
import InputForm from '@/components/form/InputForm'
import SelectForm from '@/components/form/SelectForm'
import TextareaForm from '@/components/form/TextareaForm'

import { mapGetters } from 'vuex'
export default {
  name: 'Contact',
  components: { InputForm, SelectForm, TextareaForm },
  metaInfo: { title: 'About' },
  data() {
    return {
      contact: {
        name: '',
        phonenumber: '',
        email: '',
        country_code: null,
        text: '',
      },
      options: [
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
      ],
    }
  },
  watch: {
    contact: {
      deep: true,
      handler: (value) => {
        Object.entries(value).forEach(([key, value]) => {
          let el = document.getElementById(key)
          if (el) {
            if (value) {
              if (key == 'phonenumber') {
                let checkChar = value.split('').find((x) => !Number(x))
                if (!checkChar) {
                  el.classList.remove('error')
                  el.classList.add('success')
                } else {
                  el.classList.remove('success')
                  el.classList.add('error')
                }
              } else if (key == 'country_code') {
                let elSelect = el.getElementsByClassName('vs__dropdown-toggle')
                elSelect?.[0]?.classList.remove('error')
                elSelect?.[0]?.classList.add('success')
              } else {
                el.classList.remove('error')
                el.classList.add('success')
              }
            }
          }
        })
      },
    },
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    send() {
      Object.entries(this.contact).forEach(([key, value]) => {
        let el = document.getElementById(key)
        if (el) {
          if (!value) {
            if (key == 'country_code') {
              let elSelect = el.getElementsByClassName('vs__dropdown-toggle')
              elSelect?.[0]?.classList.add('error')
            } else {
              el.classList.add('error')
            }
          } else {
            if (key == 'phonenumber') {
              let checkChar = value.split('').find((x) => !Number(x))
              if (checkChar) {
                el.classList.add('error')
              }
            } else if (key == 'country_code') {
              let elSelect = el.getElementsByClassName('vs__dropdown-toggle')
              elSelect?.[0]?.classList.remove('error')
            } else {
              el.classList.remove('error')
            }
          }
        }
      })
      if (this.isValid()) {
        let requestData = {
          ...this.contact,
          country_code: this.contact?.country_code?.id || '',
        }
        console.log(requestData)
      }
    },
    isValid() {
      let isError = Object.entries(this.contact)
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
  created() {
    this.contact = {
      ...this.contact,
      email: this.getUser?.email,
      name: this.getUser?.name,
    }
  },
}
</script>

<style lang="scss" scoped>
.contact {
  margin: auto;
  width: 50%;
  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .send-button {
    width: 50%;
    padding: 0.5rem;
  }

  @include media('retina') {
  }
  @include media('screen', '>bp1Width', '<maxWidth') {
  }
  @include media('screen', '>minWidth', '<bp1Width') {
  }
  @include media('screen', '<minWidth') {
    width: 80%;
  }
}
</style>