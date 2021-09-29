<template>
  <div v-if="active" class="modal">
    <div class="modal__modal-content" :style="{ width, height }">
      <div class="modal__modal-content__header">
        <span @click="$emit('close')" style="cursor: pointer">
          <Close></Close>
        </span>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue'

export default {
  name: 'Modal',
  props: {
    active: { type: Boolean, default: false },
    width: { type: String, default: '280px' },
    height: { type: String, default: '320px' },
  },
  components: { Close },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(31, 31, 31, 0.2);

  &__modal-content {
    background-color: $modal-bg;
    border-radius: 5px;
    &__header {
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}
</style>