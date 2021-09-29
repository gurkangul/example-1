<template>
  <div @mouseover="over(true)" @mouseleave="over(false)" class="popover">
    <div @click="onToggle" class="summary">
      <slot></slot>
    </div>
    <div v-if="isOpen" class="popover__content" ref="pcontent">
      <div class="popover__content__main">
        <p class="popover__content__main__title">{{ title }}</p>
        <div
          v-for="(item, index) in items"
          :key="item + '-' + index"
          @click="clickItem(item)"
          class="popover__content__main__item"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  props: {
    items: { type: Array, default: () => [] },
    title: { type: String, default: '' },
  },
  data() {
    return {
      isOpen: false,
      elementPosition: 0,
      isOver: false,
    }
  },
  watch: {
    isOpen() {
      window.removeEventListener('click', this.listenClick)
    },
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen
      this.$nextTick(() => {
        this.elementPosition = this.$refs?.pcontent?.getBoundingClientRect()
        if (this.elementPosition && this.isOpen) {
          window.addEventListener('click', this.listenClick)
        }
      })
    },
    over(value) {
      this.isOver = value
    },
    listenClick(event) {
      let clickX = event.x
      let clickY = event.y
      let c1 = clickX > this.elementPosition.left
      let c2 = clickX < this.elementPosition.right
      let c3 = clickY > this.elementPosition.top
      let c4 = clickY < this.elementPosition.bottom
      if (c1 && c2 && c3 && c4) {
        this.isOpen = true
      } else if (this.isOpen && this.isOver) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    },
    clickItem(item) {
      this.$emit('handleClick', item)
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.popover {
  width: 100%;
  outline: none;
  .summary {
    cursor: pointer;
  }
  &__content {
    right: 0;
    position: absolute;
    z-index: 10;
    width: auto;
    height: auto;
    background-color: #f9f9f9;
    margin-top: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    &__main::before {
      content: '';
      width: 20px;
      height: 20px;
      background-color: #f9f9f9;
      position: absolute;
      top: -10px;
      right: 10%;
      transform: rotate(45deg);
      border-radius: 3px;
    }
    &__main {
      padding: 20px;
      display: grid;
      grid-template-rows: repeat(auto-fit, 20px);
      justify-content: center;
      align-items: center;
      grid-row-gap: 15px;
      position: relative;

      &__title {
        color: $text-03;
      }
      &__item {
        cursor: pointer;
        color: rgba(31, 31, 31, 0.5);
        font-size: 16px;
        font-weight: 600;
        width: 130px;
      }
    }
  }
}
</style>
